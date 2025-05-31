import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreateTimeDto {
  @ApiProperty({ example: 2023 })
  @IsInt()
  @IsNotEmpty()
  year: number;

  @ApiProperty({ example: 'Lancement de la plateforme numérique AIR' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(175)
  @Transform(({ value }) => sanitize(value))
  event_description: string;
}
