import { IsNotEmpty } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRefreshTokenDto {
  @IsNotEmpty()
  @ApiProperty({ example: '123456789' })
  refreshToken: string;
}
