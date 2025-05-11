import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { PrismaService } from '../prisma/prisma.service';
import { JwtConfig } from './jwt.config'; 
import { AccessTokenStrategy } from './stratgies/accessToken.strategy';
import { RefreshTokenStrategy } from './stratgies/refreshToken.strategy';
import { LoggerService } from 'src/common/logger/logger.service';
import { RolesGuard } from './guards/roles.guard';

@Module({
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        secret: config.get('JWT_ACCESS_SECRET'),
        signOptions: {
          expiresIn: '1h',
        },
      }),
    }),
  ],
  providers: [AuthService, PrismaService, JwtConfig, 
    AccessTokenStrategy, RefreshTokenStrategy, RolesGuard, LoggerService],
  controllers: [AuthController],
})
export class AuthModule {}
