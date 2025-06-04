import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  IsUrl,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreateJobOfferDto {
  @ApiProperty({ example: 'Chargé de mission numérique' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  @Transform(({ value }) => sanitize(value))
  name: string;

  @ApiProperty({ example: 'CDD' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  @Transform(({ value }) => sanitize(value))
  job_type: string;

  @ApiProperty({ example: 'Lille', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(50)
  @Transform(({ value }) => (value ? sanitize(value) : value))
  city?: string;

  @ApiProperty({ example: 'https://imgur.com/logo.jpg', required: false })
  @IsString()
  @IsOptional()
  @MaxLength(255)
  @IsUrl()
  @Transform(({ value }) => (value ? sanitize(value) : value))
  link?: string;

  @IsOptional()
  @ApiProperty({ example: 1 })
  file_id?: number;

  @ApiProperty({ example: 'Un poste stimulant dans une structure dynamique' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(350)
  @Transform(({ value }) => sanitize(value))
  description: string;
}
