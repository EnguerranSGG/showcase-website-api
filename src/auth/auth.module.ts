import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { PrismaService } from '../prisma/prisma.service';
import { JwtConfig } from './jwt.config'; 

@Module({
  imports: [
    PassportModule,
    JwtModule.registerAsync({
      useClass: JwtConfig,
    }),
  ],
  providers: [AuthService, JwtStrategy, PrismaService, JwtConfig],
  controllers: [AuthController],
})
export class AuthModule {}

