import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateStructureDto {
  @ApiProperty({ example: 'Maison de quartier' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'https://example.com/image.png', required: false })
  @IsString()
  @IsOptional()
  image_url?: string;

  @ApiProperty({ example: 'Lieu d’accueil et d’accompagnement pour les familles' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: '12 rue des Lilas, 75019 Paris', required: false })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiProperty({ example: '+33 1 23 45 67 89', required: false })
  @IsString()
  @IsOptional()
  phone_number?: string;

  @ApiProperty({ example: 'Accompagnement social, aide alimentaire', required: false })
  @IsString()
  @IsOptional()
  missions?: string;

  @ApiProperty({ example: 'https://structure.example.com', required: false })
  @IsString()
  @IsOptional()
  link?: string;

  @ApiProperty({ example: 'Lundi au vendredi : 9h-17h', required: false })
  @IsString()
  @IsOptional()
  schedule?: string;
}
