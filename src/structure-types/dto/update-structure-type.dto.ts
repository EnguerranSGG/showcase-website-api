import { PartialType } from '@nestjs/mapped-types';
import { CreateStructureTypeDto } from './create-structure-type.dto';

export class UpdateStructureTypeDto extends PartialType(CreateStructureTypeDto) {} 