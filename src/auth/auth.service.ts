import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService
    ) {}

  async signup(dto: RegisterDto) {
    const userExists = await this.prisma.user.findUnique({
      where: { mail: dto.mail },
    });

    if (userExists) {
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

    return {
      message: 'Utilisateur inscrit avec succès',
      user: {
        id: user.user_id,
        mail: user.mail,
      },
    };
  }
  async login(dto: LoginDto) {
    const user = await this.prisma.user.findUnique({
      where: { mail: dto.mail },
    });
  
    if (!user) {
      throw new UnauthorizedException('Identifiants invalides');
    }
  
    const passwordValid = await bcrypt.compare(dto.password, user.password);
    if (!passwordValid) {
      throw new UnauthorizedException('Identifiants invalides');
    }
  
    const payload = {
      sub: user.user_id,
      mail: user.mail,
    };
  
    const token = await this.jwtService.signAsync(payload);
  
    return {
      access_token: token,
    };
  }
}
