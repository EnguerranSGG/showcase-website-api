import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreateNewsDto {
  @ApiProperty({ example: 'Lancement du nouveau programme' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Transform(({ value }) => sanitize(value))
  name: string;

  @IsOptional()
  file_id?: number;

  @ApiProperty({ example: 'https://example.com/article', required: false })
  @IsOptional()
  @IsUrl()
  @MaxLength(255)
  @Transform(({ value }) => (value ? sanitize(value) : value))
  link?: string;

  @ApiProperty({ example: 'Description détaillée de la nouvelle importante.' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @Transform(({ value }) => sanitize(value))
  description: string;
}
