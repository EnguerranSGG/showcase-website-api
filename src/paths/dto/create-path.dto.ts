import { IsString, MaxLength } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePathDto {
  @IsString()
  @ApiProperty({ example: 'BIP' })
  @MaxLength(50)
  @Transform(({ value }) => sanitize(value))
  name: string;
}