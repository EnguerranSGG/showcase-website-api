import { IsString, IsNotEmpty } from 'class-validator';

export class CreateStructureTypeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
} 