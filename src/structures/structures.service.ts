import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStructureDto } from './dto/create-structure.dto';
import { UpdateStructureDto } from './dto/update-structure.dto';

@Injectable()
export class StructuresService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStructureDto, userUuid: string) {
    return this.prisma.structure.create({
      data: {
        name: dto.name,
        image_url: dto.image_url ?? null,
        description: dto.description,
        address: dto.address ?? null,
        phone_number: dto.phone_number ?? null,
        missions: dto.missions ?? null,
        link: dto.link ?? null,
        schedule: dto.schedule ?? null,
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateStructureDto, userUuid: string) {
    const existing = await this.prisma.structure.findUnique({
      where: { structure_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Structure not found');
    }

    return this.prisma.structure.update({
      where: { structure_id: id },
      data: {
        name: dto.name,
        image_url: dto.image_url ?? null,
        description: dto.description,
        address: dto.address ?? null,
        phone_number: dto.phone_number ?? null,
        missions: dto.missions ?? null,
        link: dto.link ?? null,
        schedule: dto.schedule ?? null,
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.structure.delete({
      where: { structure_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.structure.findUnique({
      where: { structure_id: id },
    });
  }

  async getAll() {
    return this.prisma.structure.findMany();
  }
}
