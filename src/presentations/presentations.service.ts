import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePresentationDto } from './dto/create-presentation.dto';

@Injectable()
export class PresentationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePresentationDto, userUuid: string) {
    return this.prisma.presentation.create({
      data: {
        presentation_text: dto.presentation_text,
        user: { connect: { user_id: userUuid } },
      },
    });
  }

  async update(id: number, dto: CreatePresentationDto, userUuid: string) {
    const existing = await this.prisma.presentation.findUnique({
      where: { presentation_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Presentation not found');
    }

    return this.prisma.presentation.update({
      where: { presentation_id: id },
      data: {
        presentation_text: dto.presentation_text,
        user: { connect: { user_id: userUuid } },
      },
    });
  }

  async getById(id: number) {
    return this.prisma.presentation.findUnique({
      where: { presentation_id: id },
    });
  }

  async getAll() {
    return this.prisma.presentation.findMany();
  }
}
