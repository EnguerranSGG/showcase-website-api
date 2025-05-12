import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateValueDto {
  @ApiProperty({ example: 'Solidarité' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'https://exemple.com/image.png', required: false })
  @IsString()
  @IsOptional()
  image_url?: string;
}
