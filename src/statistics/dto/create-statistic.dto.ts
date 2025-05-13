import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateStatisticDto {
  @ApiProperty({ example: 'Nombre de bénéficiaires' })
  @IsString()
  @IsNotEmpty()
  label: string;

  @ApiProperty({ example: 120 })
  @IsNumber()
  value: number;

  @ApiProperty({ example: 2024 })
  @IsNumber()
  year: number;

  @ApiProperty({ example: 3 })
  @IsNumber()
  type_id: number;
}