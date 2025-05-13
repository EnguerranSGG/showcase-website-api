import { IsString } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class CreatePathDto {
  @IsString()
  @ApiProperty({ example: 'BIP' })
  name: string;
}