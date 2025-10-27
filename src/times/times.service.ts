import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';

@Injectable()
export class TimesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateTimeDto, userUuid: string) {
    return this.prisma.time.create({
      data: {
        year: dto.year,
        event_description: dto.event_description,
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateTimeDto, userUuid: string) {
    const existing = await this.prisma.time.findUnique({
      where: { time_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Time event not found');
    }

    return this.prisma.time.update({
      where: { time_id: id },
      data: {
        year: dto.year,
        event_description: dto.event_description,
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.time.delete({
      where: { time_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.time.findUnique({
      where: { time_id: id },
    });
  }

  async getAll() {
    return this.prisma.time.findMany();
  }
}
