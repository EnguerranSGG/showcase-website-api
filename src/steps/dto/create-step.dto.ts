import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, IsInt } from 'class-validator';

export class CreateStepDto {
  @ApiProperty({ example: 'Découverte du logement' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', required: false })
  @IsString()
  @IsOptional()
  image_url?: string;

  @ApiProperty({ example: 'Cette étape permet de comprendre les critères de sélection.' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  path_id: number;
}
