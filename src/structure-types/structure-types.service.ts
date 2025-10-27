import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStructureTypeDto } from './dto/create-structure-type.dto';
import { UpdateStructureTypeDto } from './dto/update-structure-type.dto';

@Injectable()
export class StructureTypesService {
  constructor(private prisma: PrismaService) {}

  create(createStructureTypeDto: CreateStructureTypeDto) {
    return this.prisma.structureType.create({
      data: {
        name: createStructureTypeDto.name,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  findAll() {
    return this.prisma.structureType.findMany({
      orderBy: {
        name: 'asc',
      },
    });
  }

  findOne(id: number) {
    return this.prisma.structureType.findUnique({
      where: { structure_type_id: id },
    });
  }

  update(id: number, updateStructureTypeDto: UpdateStructureTypeDto) {
    return this.prisma.structureType.update({
      where: { structure_type_id: id },
      data: {
        ...updateStructureTypeDto,
        updated_at: new Date(),
      },
    });
  }

  remove(id: number) {
    return this.prisma.structureType.delete({
      where: { structure_type_id: id },
    });
  }
} 