import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePositionDto } from './dto/create-position.dto';
import { UpdatePositionDto } from './dto/update-position.dto';

@Injectable()
export class PositionsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePositionDto) {
    return this.prisma.position.create({
      data: {
        name: dto.name,
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdatePositionDto) {
    const positionExists = await this.prisma.position.findUnique({ where: { position_id: id } });
    if (!positionExists) {
      throw new NotFoundException(`Position avec l'ID ${id} non trouvé.`);
    }
    return this.prisma.position.update({
      where: { position_id: id },
      data: {
        name: dto.name,
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    const positionExists = await this.prisma.position.findUnique({ where: { position_id: id } });
    if (!positionExists) {
      throw new NotFoundException(`Position avec l'ID ${id} non trouvé.`);
    }
    return this.prisma.position.delete({ where: { position_id: id } });
  }

  async getById(id: number) {
    const position = await this.prisma.position.findUnique({ where: { position_id: id } });
    if (!position) {
      throw new NotFoundException(`Position avec l'ID ${id} non trouvé.`);
    }
    return position;
  }

  async getStatisticsById(id: number) {
    const position = await this.prisma.position.findUnique({
      where: { position_id: id },
      include: { jobs: true },
    });
    if (!position) {
      throw new NotFoundException(`Position avec l'ID ${id} non trouvé.`);
    }
    return position.jobs;
  }

  async getAll() {
    return this.prisma.position.findMany();
  }
}
