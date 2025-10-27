import { IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ForgotPasswordDto {
  @IsEmail()
  @ApiProperty({ 
    example: 'user@example.com',
    description: 'Email de l\'utilisateur qui souhaite réinitialiser son mot de passe'
  })
  email: string;
} 