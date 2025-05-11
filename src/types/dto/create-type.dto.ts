import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreateTypeDto {
  @IsString()
  @ApiProperty({ example: 'FLE' })
  name: string;
}