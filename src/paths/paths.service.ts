import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePathDto } from './dto/create-path.dto';
import { UpdatePathDto } from './dto/update-path.dto';

@Injectable()
export class PathsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePathDto) {
    return this.prisma.path.create({
      data: {
        name: dto.name,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdatePathDto) {
    const pathExists = await this.prisma.path.findUnique({ where: { path_id: id } });
    if (!pathExists) {
      throw new NotFoundException(`Path avec l'ID ${id} non trouvé.`);
    }
    return this.prisma.path.update({
      where: { path_id: id },
      data: {
        name: dto.name,
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    const pathExists = await this.prisma.path.findUnique({ where: { path_id: id } });
    if (!pathExists) {
      throw new NotFoundException(`Path avec l'ID ${id} non trouvé.`);
    }
    return this.prisma.path.delete({ where: { path_id: id } });
  }

  async getById(id: number) {
    const path = await this.prisma.path.findUnique({ where: { path_id: id } });
    if (!path) {
      throw new NotFoundException(`Path avec l'ID ${id} non trouvé.`);
    }
    return path;
  }

  async getStepsPathById(id: number) {
    const path = await this.prisma.path.findUnique({
      where: { path_id: id },
      include: { steps: true },
    });
    if (!path) {
      throw new NotFoundException(`Path avec l'ID ${id} non trouvé.`);
    }
    return path.steps;
  }

  async getAll() {
    return this.prisma.path.findMany();
  }
}
