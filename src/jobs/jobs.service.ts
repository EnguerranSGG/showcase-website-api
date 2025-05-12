import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Injectable()
export class JobsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateJobDto, userUuid: string) {
    console.log({
        function: dto.function,
        position: { connect: { position_id: dto.position_id } },
        user: { connect: { user_id: userUuid } },
      });
    return this.prisma.job.create({
      data: {
        function: dto.function,
        position: { connect: { position_id: dto.position_id } },
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateJobDto, userUuid: string) {
    const existing = await this.prisma.job.findUnique({
      where: { job_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Job not found');
    }

    return this.prisma.job.update({
      where: { job_id: id },
      data: {
        function: dto.function,
        position: { connect: { position_id: dto.position_id } },
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.job.delete({
      where: { job_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.job.findUnique({
      where: { job_id: id },
    });
  }

  async getAll() {
    return this.prisma.job.findMany();
  }

  async getJobsByPositionId(positionId: number) {
    return this.prisma.job.findMany({
      where: { position_id: positionId },
    });
  }
}
