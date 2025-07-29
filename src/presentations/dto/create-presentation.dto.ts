import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreatePresentationDto {
  @ApiProperty({ example: 'Présentation de l\'association' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(1200)
  @Transform(({ value }) => sanitize(value))
  presentation_text: string;
}
