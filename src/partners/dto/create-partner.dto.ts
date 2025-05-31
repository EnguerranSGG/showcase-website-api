import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreatePartnerDto {
  @ApiProperty({ example: 'La Croix-Rouge' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(20)
  @Transform(({ value }) => sanitize(value))
  name: string;

  @IsOptional()
  file_id?: number;
}
