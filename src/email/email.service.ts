import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private readonly logger = new Logger(EmailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.initializeTransporter();
  }

  private initializeTransporter() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.configService.get<string>('SMTP_USER'),
        pass: this.configService.get<string>('SMTP_PASS'),
      },
    } as nodemailer.TransportOptions);
  }

  async sendPasswordResetEmail(email: string, token: string): Promise<boolean> {
    try {
      const frontendUrl = this.configService.get<string>('FRONTEND_URL') || 'http://localhost:3000';
      const resetUrl = `${frontendUrl}/reset-password?token=${token}`;

      const mailOptions: nodemailer.SendMailOptions = {
        from: this.configService.get<string>('SMTP_FROM') || this.configService.get<string>('SMTP_USER') || 'noreply@air.com',
        to: email,
        subject: 'Réinitialisation de votre mot de passe - AIR',
        html: this.getPasswordResetEmailTemplate(resetUrl),
        text: this.getPasswordResetEmailTextTemplate(resetUrl),
      };

      const result = await this.transporter.sendMail(mailOptions);
      this.logger.log(`Email de réinitialisation envoyé à ${email}: ${result?.messageId || 'ID non disponible'}`);
      return true;
    } catch (error) {
      this.logger.error(`Erreur lors de l'envoi de l'email à ${email}:`, error);
      return false;
    }
  }

  private getPasswordResetEmailTemplate(resetUrl: string): string {
    return `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Réinitialisation de mot de passe</title>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #f8f9fa; padding: 20px; text-align: center; border-radius: 5px; }
          .content { padding: 20px; }
          .button { display: inline-block; padding: 12px 24px; background-color: #007bff; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
          .warning { background-color: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Réinitialisation de mot de passe</h1>
          </div>
          
          <div class="content">
            <p>Bonjour,</p>
            
            <p>Vous avez demandé la réinitialisation de votre mot de passe pour votre compte AIR.</p>
            
            <p>Cliquez sur le bouton ci-dessous pour définir un nouveau mot de passe :</p>
            
            <div style="text-align: center;">
              <a href="${resetUrl}" class="button">Réinitialiser mon mot de passe</a>
            </div>
            
            <div class="warning">
              <strong>⚠️ Important :</strong>
              <ul>
                <li>Ce lien expire dans 15 minutes</li>
                <li>Ne partagez pas ce lien avec qui que ce soit</li>
                <li>Si vous n'avez pas demandé cette réinitialisation, ignorez cet email</li>
              </ul>
            </div>
            
            <p>Si le bouton ne fonctionne pas, copiez et collez ce lien dans votre navigateur :</p>
            <p style="word-break: break-all; color: #007bff;">${resetUrl}</p>
          </div>
          
          <div class="footer">
            <p>Cet email a été envoyé automatiquement. Merci de ne pas y répondre.</p>
            <p>© 2024 AIR - Accueil Insertion Rencontre</p>
          </div>
        </div>
      </body>
      </html>
    `;
  }

  private getPasswordResetEmailTextTemplate(resetUrl: string): string {
    return `
Réinitialisation de votre mot de passe - AIR

Bonjour,

Vous avez demandé la réinitialisation de votre mot de passe pour votre compte AIR.

Cliquez sur le lien suivant pour définir un nouveau mot de passe :

${resetUrl}

⚠️ Important :
- Ce lien expire dans 15 minutes
- Ne partagez pas ce lien avec qui que ce soit
- Si vous n'avez pas demandé cette réinitialisation, ignorez cet email

Cet email a été envoyé automatiquement. Merci de ne pas y répondre.

© 2024 AIR - Accueil Insertion Rencontre
    `;
  }

  async testConnection(): Promise<boolean> {
    try {
      await this.transporter.verify();
      this.logger.log('Connexion SMTP réussie');
      return true;
    } catch (error) {
      this.logger.error('Erreur de connexion SMTP:', error);
      return false;
    }
  }
}
