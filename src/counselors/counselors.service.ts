import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCounselorDto } from './dto/create-counselor.dto';

@Injectable()
export class CounselorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateCounselorDto, userUuid: string) {
    return this.prisma.counselor.create({
      data: {
        counselor_firstname: dto.counselor_firstname,
        counselor_lastname: dto.counselor_lastname,
        counselor_function: dto.counselor_function,
        user: { connect: { user_id: userUuid } },
      },
    });
  }

  async update(id: number, dto: CreateCounselorDto, userUuid: string) {
    const existing = await this.prisma.counselor.findUnique({
      where: { counselor_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Job offer not found');
    }

    return this.prisma.counselor.update({
      where: { counselor_id: id },
      data: {
        counselor_firstname: dto.counselor_firstname,
        counselor_lastname: dto.counselor_lastname,
        counselor_function: dto.counselor_function,
        user: { connect: { user_id: userUuid } },
      },
    });
  }

  async delete(id: number) {
    return this.prisma.counselor.delete({
      where: { counselor_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.counselor.findUnique({
      where: { counselor_id: id },
    });
  }

  async getAll() {
    return this.prisma.counselor.findMany({
      orderBy: { counselor_id: 'asc' },
    });
  }
}
