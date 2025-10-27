import {
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
  IsArray,
  ArrayNotEmpty,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Transform } from 'class-transformer';
import { sanitize } from 'class-sanitizer';
import { CreateMissionDto } from '../../missions/dto/create-mission.dto';

export class CreateStructureDto {
  @IsString()
  @MaxLength(60)
  @Transform(({ value }) => sanitize(value))
  name: string;

  @IsOptional()
  @Type(() => Number)
  file_id?: number;

  @IsOptional()
  @Type(() => Number)
  structure_type_id?: number;

  @IsString()
  @MaxLength(330)
  @Transform(({ value }) => sanitize(value))
  description: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @Transform(({ value }) => (value ? sanitize(value) : value))
  address?: string;

  @IsOptional()
  @IsString()
  @MaxLength(25)
  phone_number?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @Transform(({ value }) => (value ? sanitize(value) : value))
  link?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateMissionDto)
  missions?: CreateMissionDto[];
}
