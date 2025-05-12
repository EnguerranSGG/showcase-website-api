import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateJobDto {
  @ApiProperty({ example: 'Secrétaire' })
  @IsString()
  @IsNotEmpty()
  function: string;

  @ApiProperty({ example: 1 })
  @IsNumber()
  position_id: number;
}