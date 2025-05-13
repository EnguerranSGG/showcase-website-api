import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePositionDto {
  @IsString()
  @ApiProperty({ example: 'Conseil d\'administration' })
  name: string;
}