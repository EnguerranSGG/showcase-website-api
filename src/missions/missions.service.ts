import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMissionDto } from './dto/create-mission.dto';
import { UpdateMissionDto } from './dto/update-mission.dto';

@Injectable()
export class MissionsService {
  constructor(private prisma: PrismaService) {}

  async create(structureId: number, dto: CreateMissionDto, user_id: string) {
    return this.prisma.mission.create({
      data: {
        content: dto.content.trim(),
        structure: { connect: { structure_id: structureId } },
        user: { connect: { user_id } },
      },
    });
  }

  async getById(id: number) {
    return this.prisma.mission.findUnique({ where: { mission_id: id } });
  }

  async findAllByStructure(structureId: number) {
    return this.prisma.mission.findMany({
      where: { structure_id: structureId },
      orderBy: { mission_id: 'asc' }, // Pour garder un ordre constant
    });
  }

  async update(id: number, dto: UpdateMissionDto) {
    const mission = await this.prisma.mission.findUnique({ where: { mission_id: id } });
    if (!mission) {
      throw new NotFoundException(`Mission avec l’ID ${id} non trouvée.`);
    }

    return this.prisma.mission.update({
      where: { mission_id: id },
      data: {
        content: dto.content?.trim(),
      },
    });
  }

  async delete(id: number) {
    const mission = await this.prisma.mission.findUnique({ where: { mission_id: id } });
    if (!mission) {
      throw new NotFoundException(`Mission avec l’ID ${id} non trouvée.`);
    }

    return this.prisma.mission.delete({
      where: { mission_id: id },
    });
  }
}
