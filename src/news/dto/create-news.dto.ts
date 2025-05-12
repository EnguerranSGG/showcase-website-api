import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({ example: 'Lancement du nouveau programme' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'https://example.com/image.jpg', required: false })
  @IsOptional()
  @IsUrl()
  image_url?: string;

  @ApiProperty({ example: 'https://example.com/article', required: false })
  @IsOptional()
  @IsUrl()
  link?: string;

  @ApiProperty({ example: 'Description détaillée de la nouvelle importante.' })
  @IsString()
  @IsNotEmpty()
  description: string;
}
