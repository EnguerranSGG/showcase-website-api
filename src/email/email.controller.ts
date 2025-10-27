import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { EmailService } from './email.service';
import { EmailCleanupService } from './email-cleanup.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Role } from '@prisma/client';

@ApiTags('Email')
@Controller('email')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class EmailController {
  constructor(
    private readonly emailService: EmailService,
    private readonly emailCleanupService: EmailCleanupService,
  ) {}

  @Get('test-connection')
  @Roles(Role.ADMIN)
  @ApiOperation({ 
    summary: 'Tester la connexion SMTP',
    description: 'Vérifie que la configuration SMTP est correcte'
  })
  @ApiResponse({
    status: 200,
    description: 'Connexion SMTP réussie',
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Erreur de connexion SMTP' 
  })
  async testConnection() {
    const isConnected = await this.emailService.testConnection();
    return {
      success: isConnected,
      message: isConnected 
        ? 'Connexion SMTP réussie' 
        : 'Erreur de connexion SMTP'
    };
  }

  @Post('test-password-reset')
  @Roles(Role.ADMIN)
  @ApiOperation({ 
    summary: 'Tester l\'envoi d\'email de réinitialisation',
    description: 'Envoie un email de test de réinitialisation de mot de passe'
  })
  @ApiResponse({
    status: 200,
    description: 'Email de test envoyé avec succès',
  })
  @ApiResponse({ 
    status: 400, 
    description: 'Erreur lors de l\'envoi de l\'email' 
  })
  async testPasswordResetEmail(@Body() body: { email: string }) {
    const testToken = 'test-token-123456789';
    const emailSent = await this.emailService.sendPasswordResetEmail(body.email, testToken);
    
    return {
      success: emailSent,
      message: emailSent 
        ? 'Email de test envoyé avec succès' 
        : 'Erreur lors de l\'envoi de l\'email de test'
    };
  }

  @Post('cleanup-expired-tokens')
  @Roles(Role.ADMIN)
  @ApiOperation({ 
    summary: 'Nettoyer les tokens expirés',
    description: 'Supprime manuellement tous les tokens de réinitialisation expirés'
  })
  @ApiResponse({
    status: 200,
    description: 'Nettoyage effectué avec succès',
  })
  @ApiResponse({ 
    status: 500, 
    description: 'Erreur lors du nettoyage' 
  })
  async cleanupExpiredTokens() {
    const count = await this.emailCleanupService.cleanupExpiredTokensManually();
    return {
      success: true,
      message: `Nettoyage effectué : ${count} tokens expirés supprimés`,
      count
    };
  }
}
