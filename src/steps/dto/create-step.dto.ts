import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  IsOptional,
  IsInt,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreateStepDto {
  @ApiProperty({ example: 'Découverte du logement' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @Transform(({ value }) => sanitize(value))
  name: string;

  @IsOptional()
  file_id?: number;

  @ApiProperty({
    example: 'Cette étape permet de comprendre les critères de sélection.',
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(390)
  @Transform(({ value }) => sanitize(value))
  description: string;

  @ApiProperty({ example: 1 })
  @IsInt()
  path_id: number;
}
