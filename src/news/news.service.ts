import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNewsDto } from './dto/create-news.dto';
import { UpdateNewsDto } from './dto/update-news.dto';

@Injectable()
export class NewsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateNewsDto, userUuid: string) {
    return this.prisma.news.create({
      data: {
        name: dto.name,
        file: dto.file_id ? { connect: { file_id: dto.file_id } } : undefined,
        link: dto.link ?? null,
        description: dto.description,
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, dto: UpdateNewsDto, userUuid: string) {
    const existing = await this.prisma.news.findUnique({
      where: { news_id: id },
    });

    if (!existing) {
      throw new NotFoundException('News item not found');
    }

    return this.prisma.news.update({
      where: { news_id: id },
      data: {
        name: dto.name,
        file: dto.file_id
          ? { connect: { file_id: dto.file_id } }
          : { disconnect: true },
        link: dto.link ?? null,
        description: dto.description,
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.news.delete({
      where: { news_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.news.findUnique({
      where: { news_id: id },
    });
  }

  async getLatest() {
    // ⚠️ OPTIMISATION : Exclure le champ 'file.file' (données binaires) pour améliorer les performances
    return this.prisma.news.findFirst({
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
      orderBy: { created_at: 'desc' },
    });
  }

  async getAll() {
    // ⚠️ OPTIMISATION : Exclure le champ 'file.file' (données binaires) pour améliorer les performances
    return this.prisma.news.findMany({
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
