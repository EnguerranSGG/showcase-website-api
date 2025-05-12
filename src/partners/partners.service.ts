import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePartnerDto } from './dto/create-partner.dto';
import { UpdatePartnerDto } from './dto/update-partner.dto';

@Injectable()
export class PartnersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreatePartnerDto, userUuid: string) {
    return this.prisma.partner.create({
      data: {
        name: dto.name,
        image_url: dto.image_url,
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdatePartnerDto, userUuid: string) {
    const existing = await this.prisma.partner.findUnique({
      where: { parteners_id: id },
    });

    if (!existing) {
      throw new NotFoundException('Partner not found');
    }

    return this.prisma.partner.update({
      where: { parteners_id: id },
      data: {
        name: dto.name,
        image_url: dto.image_url,
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.partner.delete({
      where: { parteners_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.partner.findUnique({
      where: { parteners_id: id },
    });
  }

  async getAll() {
    return this.prisma.partner.findMany();
  }
}
