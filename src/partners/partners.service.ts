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
        file: dto.file_id ? { connect: { file_id: dto.file_id } } : undefined,
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
        file: dto.file_id
          ? { connect: { file_id: dto.file_id } }
          : { disconnect: true },
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
    // ⚠️ OPTIMISATION : Exclure le champ 'file.file' (données binaires) pour améliorer les performances
    return this.prisma.partner.findMany({
      include: {
        file: {
          select: {
            file_id: true,
            name: true,
            title: true,
            created_at: true,
            updated_at: true,
            user_id: true,
            // Ne PAS inclure 'file' (Bytes) - utiliser /files/:id/download pour télécharger
          },
        },
      },
    });
  }
}
