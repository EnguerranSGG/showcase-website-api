import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateTimeDto {
  @ApiProperty({ example: 2023 })
  @IsInt()
  year: number;

  @ApiProperty({ example: 'Lancement de la plateforme numérique AIR' })
  @IsString()
  @IsNotEmpty()
  event_description: string;
}
