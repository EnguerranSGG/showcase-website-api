import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoggerService } from 'src/common/logger/logger.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private logger: LoggerService
    ) {}

  async signup(dto: RegisterDto) {

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

    const tokens = await this.getTokens(user.user_id, user.mail);
    await this.refreshToken(user.user_id, tokens.refreshToken);

    return {
      message: 'Utilisateur inscrit avec succès',
      user: {
        id: user.user_id,
        mail: user.mail,
        tokens
      },
    };
  }
  async login(dto: LoginDto) {

    this.logger.log(`Tentative de connexion pour : ${dto.mail}`);

    const user = await this.prisma.user.findUnique({
      where: { mail: dto.mail },
    });
  
    if (!user) {
      this.logger.warn(`Email inconnu : ${dto.mail}`);
      throw new UnauthorizedException('Identifiants invalides');
    }
  
    const passwordValid = await bcrypt.compare(dto.password, user.password);
    if (!passwordValid) {
      this.logger.warn(`Mot de passe invalide pour : ${dto.mail}`);
      throw new UnauthorizedException('Identifiants invalides');
    }

    this.logger.log(`Connexion réussie pour : ${dto.mail}`);
  
    const tokens = await this.getTokens(user.user_id, user.mail);
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

  async getTokens(userId: string, mail: string) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          sub: userId,
          mail,
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

}
