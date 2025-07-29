import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ResetPasswordDto {
  @IsString()
  @ApiProperty({ 
    example: 'abc123def456...',
    description: 'Token de réinitialisation reçu par email'
  })
  token: string;
  
  @MinLength(8)
  @ApiProperty({ 
    example: 'newPassword123',
    description: 'Nouveau mot de passe (minimum 8 caractères)'
  })
  newPassword: string;
} 