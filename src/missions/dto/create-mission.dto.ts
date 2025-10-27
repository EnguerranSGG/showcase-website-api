import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateMissionDto {
  @ApiProperty({ example: 'Aide alimentaire' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(250)
  content: string;
}
