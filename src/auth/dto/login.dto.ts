import { IsEmail, IsString, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @IsEmail()
  @ApiProperty({ example: 'K2m6t@example.com' })
  mail: string;

  @IsString()
  @MinLength(6)
  @ApiProperty({ example: 'password' })
  password: string;
}
