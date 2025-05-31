import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateValueDto } from './dto/create-value.dto';
import { UpdateValueDto } from './dto/update-value.dto';

@Injectable()
export class ValuesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateValueDto, userUuid: string) {
    return this.prisma.value.create({
      data: {
        name: dto.name,
        file: dto.file_id ? { connect: { file_id: dto.file_id } } : undefined,
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateValueDto, userUuid: string) {
    const existing = await this.prisma.value.findUnique({
      where: { value_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Value not found');
    }

    return this.prisma.value.update({
      where: { value_id: id },
      data: {
        name: dto.name,
        file: dto.file_id ? { connect: { file_id: dto.file_id } } : { disconnect: true },
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.value.delete({
      where: { value_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.value.findUnique({
      where: { value_id: id },
    });
  }

  async getAll() {
    return this.prisma.value.findMany({
      include: { file: true },
    });
  }
}
