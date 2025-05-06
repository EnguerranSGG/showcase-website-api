import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsEmail()
  @ApiProperty({ example: 'K2m6t@example.com' })
  mail: string;

  @MinLength(8)
  @ApiProperty({ example: 'password' })
  password: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'John' })
  firstname: string;

  @IsNotEmpty()
  @ApiProperty({ example: 'Doe' })
  lastname: string;

}
