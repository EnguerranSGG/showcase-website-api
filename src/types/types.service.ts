import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';

@Injectable()
export class TypesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTypeDto) {
    return this.prisma.type.create({
      data: {
        name: dto.name,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateTypeDto) {
    const typeExists = await this.prisma.type.findUnique({ where: { type_id: id } });
    if (!typeExists) {
      throw new NotFoundException(`Type avec l'ID ${id} non trouvé.`);
    }
    return this.prisma.type.update({
      where: { type_id: id },
      data: {
        name: dto.name,
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    const typeExists = await this.prisma.type.findUnique({ where: { type_id: id } });
    if (!typeExists) {
      throw new NotFoundException(`Type avec l'ID ${id} non trouvé.`);
    }
    return this.prisma.type.delete({ where: { type_id: id } });
  }

  async getById(id: number) {
    const type = await this.prisma.type.findUnique({ where: { type_id: id } });
    if (!type) {
      throw new NotFoundException(`Type avec l'ID ${id} non trouvé.`);
    }
    return type;
  }

  async getStatisticsById(id: number) {
    const type = await this.prisma.type.findUnique({
      where: { type_id: id },
      include: { statistics: true },
    });
    if (!type) {
      throw new NotFoundException(`Type avec l'ID ${id} non trouvé.`);
    }
    return type.statistics;
  }

  async getAll() {
    return this.prisma.type.findMany();
  }
}
