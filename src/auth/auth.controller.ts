import { Controller, Post, Body, Put } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Req } from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { Public } from './decorators/public.decorator';
import { Roles } from './decorators/roles.decorator';
import { RolesGuard } from './guards/roles.guard';
import { Role } from '@prisma/client';
import { AuthService } from './auth.service';
import { LoggerService } from 'src/common/logger/logger.service';
import { RegisterDto } from './dto/register.dto';
import { UpdateUserRefreshTokenDto } from './dto/refresh.dto';
import { LoginDto } from './dto/login.dto';
import { ForgotPasswordDto } from './dto/forgot-password.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { WriteThrottle } from './decorators/throttle.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly logger: LoggerService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @WriteThrottle()
  @Post('addUser')
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
  @ApiResponse({ status: 201, description: 'Utilisateur créé avec succès.' })
  @ApiResponse({ status: 400, description: 'Requête invalide.' })
  signup(@Body() dto: RegisterDto) {
    return this.authService.addUser(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put('refresh')
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Met a jour le refresh token de l\'utilisateur connecte',
  })
  refresh(@Req() req, @Body() dto: UpdateUserRefreshTokenDto) {
    const userId = req.user.sub;
    return this.authService.refreshToken(userId, dto.refreshToken);
  }

  @Public()
  @Post('login')
  @ApiOperation({ summary: 'Se connecter' })
  @ApiResponse({
    status: 200,
    description: 'Connexion réussie. Retourne un JWT.',
  })
  @ApiResponse({ status: 401, description: 'Identifiants invalides.' })
  login(@Body() dto: LoginDto) {
    this.logger.log('Requête POST /auth/login reçue', 'AuthController');
    return this.authService.login(dto);
  }

  @Public()
  @Post('forgot-password')
  @ApiOperation({ 
    summary: 'Demander une réinitialisation de mot de passe',
    description: 'Envoie un email avec un lien de réinitialisation si l\'email existe dans la base de données'
  })
  @ApiResponse({
    status: 200,
    description: 'Demande traitée. Un email sera envoyé si l\'adresse existe.',
  })
  @ApiResponse({ status: 400, description: 'Email invalide.' })
  forgotPassword(@Body() dto: ForgotPasswordDto) {
    this.logger.log('Requête POST /auth/forgot-password reçue', 'AuthController');
    return this.authService.forgotPassword(dto);
  }

  @Public()
  @Post('reset-password')
  @ApiOperation({ 
    summary: 'Réinitialiser le mot de passe',
    description: 'Réinitialise le mot de passe avec le token reçu par email'
  })
  @ApiResponse({
    status: 200,
    description: 'Mot de passe mis à jour avec succès.',
  })
  @ApiResponse({ status: 400, description: 'Token invalide, expiré ou déjà utilisé.' })
  resetPassword(@Body() dto: ResetPasswordDto) {
    this.logger.log('Requête POST /auth/reset-password reçue', 'AuthController');
    return this.authService.resetPassword(dto);
  }
}
