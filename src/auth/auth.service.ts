import {
  Injectable,
  ConflictException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from 'src/common/logger/logger.service';
import { EmailService } from '../email/email.service';
import * as bcrypt from 'bcrypt';
import * as crypto from 'crypto';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private logger: LoggerService,
    private emailService: EmailService,
  ) {}

  async addUser(dto: RegisterDto) {
    this.logger.log(`Tentative d'inscription pour l'email : ${dto.mail}`);

    const userExists = await this.prisma.user.findUnique({
      where: { mail: dto.mail },
    });

    if (userExists) {
      this.logger.warn(`Email déjà utilisé : ${dto.mail}`);
      throw new ConflictException('Email déjà utilisé');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = await this.prisma.user.create({
      data: {
        firstname: dto.firstname,
        lastname: dto.lastname,
        mail: dto.mail,
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });

    this.logger.log(`Nouvel utilisateur créé : ${user.mail}`);

    const tokens = await this.getTokens(user.user_id, user.mail, user.role);
    await this.refreshToken(user.user_id, tokens.refreshToken);

    return {
      message: 'Utilisateur inscrit avec succès',
      user: {
        id: user.user_id,
        mail: user.mail,
        tokens,
      },
    };
  }
  async login(dto: LoginDto) {
    this.logger.log(`Tentative de connexion pour : ${dto.mail}`, 'AuthService');

    const user = await this.prisma.user.findUnique({
      where: { mail: dto.mail },
    });

    this.logger.debug(`Mail reçu : ${dto.mail}`, 'AuthService');

    if (!user) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const passwordValid = await bcrypt.compare(dto.password, user.password);

    if (!passwordValid) {
      this.logger.warn(
        `Mot de passe invalide pour : ${dto.mail}`,
        'AuthService',
      );
      throw new UnauthorizedException('Identifiants invalides');
    }

    this.logger.log(`Connexion réussie pour : ${dto.mail}`, 'AuthService');

    const tokens = await this.getTokens(user.user_id, user.mail, user.role);
    await this.refreshToken(user.user_id, tokens.refreshToken);

    return tokens;
  }

  async logout(userId: string) {
    await this.prisma.user.update({
      where: { user_id: userId },
      data: { refreshToken: null },
    });

    this.logger.log(`Déconnexion réussie !`);
  }

  async refreshToken(userId: string, refreshToken: string) {
    const hashed = await bcrypt.hash(refreshToken, 10);
    await this.prisma.user.update({
      where: { user_id: userId },
      data: { refreshToken: hashed },
    });
  }

  async getTokens(userId: string, mail: string, role: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          mail,
          role,
        },
        {
          secret: this.configService.get<string>('JWT_ACCESS_SECRET'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          sub: userId,
          mail,
        },
        {
          secret: this.configService.get<string>('JWT_REFRESH_SECRET'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }

  async forgotPassword(dto: ForgotPasswordDto) {
    this.logger.log(`Demande de réinitialisation de mot de passe pour : ${dto.email}`, 'AuthService');

    // Vérifier que l'utilisateur existe
    const user = await this.prisma.user.findUnique({
      where: { mail: dto.email }
    });

    // Pour des raisons de sécurité, ne pas révéler si l'email existe
    if (!user) {
      this.logger.warn(`Demande de reset pour un email inexistant : ${dto.email}`, 'AuthService');
      return { 
        message: 'Si cet email existe dans notre base de données, un lien de réinitialisation a été envoyé.' 
      };
    }

    // Générer un token unique et sécurisé
    const token = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    // Sauvegarder en base
    await this.prisma.passwordReset.create({
      data: {
        email: dto.email,
        token,
        expiresAt,
      }
    });

    this.logger.log(`Token de réinitialisation créé pour : ${dto.email}`, 'AuthService');

    // Envoyer l'email avec le token
    const emailSent = await this.emailService.sendPasswordResetEmail(dto.email, token);
    
    if (!emailSent) {
      this.logger.error(`Échec de l'envoi de l'email de réinitialisation à : ${dto.email}`, 'AuthService');
      // En cas d'échec d'envoi, on supprime le token de la base
      await this.prisma.passwordReset.delete({
        where: { token }
      });
      throw new BadRequestException('Erreur lors de l\'envoi de l\'email de réinitialisation');
    }

    this.logger.log(`Email de réinitialisation envoyé avec succès à : ${dto.email}`, 'AuthService');

    return { 
      message: 'Si cet email existe dans notre base de données, un lien de réinitialisation a été envoyé.' 
    };
  }

  async resetPassword(dto: ResetPasswordDto) {
    this.logger.log(`Tentative de réinitialisation avec le token : ${dto.token}`, 'AuthService');

    // Vérifier le token
    const resetRecord = await this.prisma.passwordReset.findUnique({
      where: { token: dto.token }
    });

    if (!resetRecord) {
      this.logger.warn(`Token de réinitialisation invalide : ${dto.token}`, 'AuthService');
      throw new BadRequestException('Token de réinitialisation invalide ou expiré');
    }

    if (resetRecord.used) {
      this.logger.warn(`Token déjà utilisé : ${dto.token}`, 'AuthService');
      throw new BadRequestException('Ce lien de réinitialisation a déjà été utilisé');
    }

    if (resetRecord.expiresAt < new Date()) {
      this.logger.warn(`Token expiré : ${dto.token}`, 'AuthService');
      throw new BadRequestException('Ce lien de réinitialisation a expiré');
    }

    // Mettre à jour le mot de passe
    const hashedPassword = await bcrypt.hash(dto.newPassword, 10);
    await this.prisma.user.update({
      where: { mail: resetRecord.email },
      data: { 
        password: hashedPassword,
        updated_at: new Date()
      }
    });

    // Marquer le token comme utilisé
    await this.prisma.passwordReset.update({
      where: { id: resetRecord.id },
      data: { used: true }
    });

    this.logger.log(`Mot de passe mis à jour avec succès pour : ${resetRecord.email}`, 'AuthService');

    return { 
      message: 'Votre mot de passe a été mis à jour avec succès. Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.' 
    };
  }
}
