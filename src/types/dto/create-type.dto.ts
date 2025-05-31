import { IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreateTypeDto {
  @IsString()
  @ApiProperty({ example: 'FLE' })
  @Transform(({ value }) => sanitize(value))
  @MaxLength(20)
  name: string;
}