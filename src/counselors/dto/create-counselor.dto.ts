import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsString,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreateCounselorDto {
  @ApiProperty({ example: 'John' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @Transform(({ value }) => sanitize(value))
  counselor_firstname: string;

  @ApiProperty({ example: 'Doe' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(30)
  @Transform(({ value }) => sanitize(value))
  counselor_lastname: string;

  @ApiProperty({ example: 'Chargé de mission numérique', required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @Transform(({ value }) => (value ? sanitize(value) : value))
  counselor_function: string;

  @ApiProperty({ example: 'Description d\'un conseiller', required: true })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  @Transform(({ value }) => (value ? sanitize(value) : value))
  counselor_presentation: string;

}
