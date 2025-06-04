import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStatisticDto } from './dto/create-statistic.dto';
import { UpdateStatisticDto } from './dto/update-statistic.dto';

@Injectable()
export class StatisticsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateStatisticDto, userUuid: string) {
    console.log({
      label: dto.label,
      value: dto.value,
      year: dto.year,
      is_percentage: dto.is_percentage,
      type: { connect: { type_id: dto.type_id } },
      user: { connect: { user_id: userUuid } },
    });
    return this.prisma.statistic.create({
      data: {
        label: dto.label,
        value: dto.value,
        year: dto.year,
        is_percentage: dto.is_percentage,
        type: { connect: { type_id: dto.type_id } },
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateStatisticDto, userUuid: string) {
    const existing = await this.prisma.statistic.findUnique({
      where: { statistic_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Statistic not found');
    }

    return this.prisma.statistic.update({
      where: { statistic_id: id },
      data: {
        label: dto.label,
        value: dto.value,
        is_percentage: dto.is_percentage,
        year: dto.year,
        type: { connect: { type_id: dto.type_id } },
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.statistic.delete({
      where: { statistic_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.statistic.findUnique({
      where: { statistic_id: id },
    });
  }

  async getByTypeName(typeName: string) {
    return this.prisma.statistic.findMany({
      where: {
        type: {
          name: typeName,
        },
      },
      orderBy: {
        year: 'desc',
      },
    });
  }

  async getAll() {
    return this.prisma.statistic.findMany();
  }

  async getStatisticsByTypeId(typeId: number) {
    return this.prisma.statistic.findMany({
      where: { type_id: typeId },
    });
  }
}
