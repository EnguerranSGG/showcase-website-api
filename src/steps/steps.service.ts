import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStepDto } from './dto/create-step.dto';
import { UpdateStepDto } from './dto/update-step.dto';

@Injectable()
export class StepsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStepDto, userUuid: string) {
    return this.prisma.step.create({
      data: {
        name: dto.name,
        description: dto.description,
        file: dto.file_id ? { connect: { file_id: dto.file_id } } : undefined,
        path: { connect: { path_id: dto.path_id } },
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateStepDto, userUuid: string) {
    const existing = await this.prisma.step.findUnique({
      where: { step_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Step not found');
    }

    return this.prisma.step.update({
      where: { step_id: id },
      data: {
        name: dto.name,
        description: dto.description,
        file: dto.file_id ? { connect: { file_id: dto.file_id } } : { disconnect: true },
        path: { connect: { path_id: dto.path_id } },
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.step.delete({
      where: { step_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.step.findUnique({
      where: { step_id: id },
    });
  }

  async getAll() {
    return this.prisma.step.findMany({
      include: { file: true },
    });
  }

  async getStepsByPathId(pathId: number) {
    return this.prisma.step.findMany({
      where: { path_id: pathId },
    });
  }
}
