import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateJobOfferDto {
  @ApiProperty({ example: 'Chargé de mission numérique' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'CDD' })
  @IsString()
  @IsNotEmpty()
  job_type: string;

  @ApiProperty({ example: 'Lille', required: false })
  @IsString()
  @IsOptional()
  city?: string;

  @ApiProperty({ example: 'https://imgur.com/logo.jpg', required: false })
  @IsString()
  @IsOptional()
  image_url?: string;

  @ApiProperty({ example: 'https://example.com/offre/123', required: false })
  @IsString()
  @IsOptional()
  link?: string;

  @ApiProperty({ example: 'Un poste stimulant dans une structure dynamique' })
  @IsString()
  @IsNotEmpty()
  description: string;
}

