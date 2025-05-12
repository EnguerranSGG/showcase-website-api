import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateFileDto {
  @ApiProperty({ example: 'document.pdf' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: 'string', format: 'binary' })
  @IsNotEmpty()
  file: any;
}

