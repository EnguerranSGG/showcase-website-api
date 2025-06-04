import { ApiProperty } from '@nestjs/swagger';
import { Decimal } from '@prisma/client/runtime/library';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';

export class CreateStatisticDto {
  @ApiProperty({ example: 'Nombre de bénéficiaires' })
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => sanitize(value))
  label: string;

  @ApiProperty({ example: 120 })
  @IsNumber()
  @IsNotEmpty()
  value: Decimal;

  @ApiProperty({ example: 2024 })
  @IsNumber()
  @IsNotEmpty()
  year: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  @IsNotEmpty()
  is_percentage: boolean;

  @ApiProperty({ example: 3 })
  @IsNumber()
  type_id: number;
}
