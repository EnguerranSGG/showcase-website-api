import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreatePartnerDto {
  @ApiProperty({ example: 'La Croix-Rouge' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'https://example.com/logo.png' })
  @IsString()
  @IsUrl()
  image_url: string;
}
