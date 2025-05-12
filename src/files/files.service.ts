import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateFileDto, userUuid: string) {
    return this.prisma.file.create({
      data: {
        name: dto.name,
        file: dto.file,
        user: { connect: { user_id: userUuid } },
        created_at: new Date(),
        updated_at: new Date(),
      },
    });
  }

  async update(id: number, userUuid: string) {
    const existing = await this.prisma.file.findUnique({
      where: { file_id: id },
    });

    if (!existing) {
      throw new NotFoundException('File not found');
    }

    return this.prisma.file.update({
      where: { file_id: id },
      data: {
        name: existing.name,
        file: existing.file,
        user: { connect: { user_id: userUuid } },
        updated_at: new Date(),
      },
    });
  }

  async delete(id: number) {
    return this.prisma.file.delete({
      where: { file_id: id },
    });
  }

  async getById(id: number) {
    return this.prisma.file.findUnique({
      where: { file_id: id },
    });
  }

  async getAll() {
    return this.prisma.file.findMany();
  }
}
