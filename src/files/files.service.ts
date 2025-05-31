import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateFileDto } from './dto/create-file.dto';
import { UpdateFileDto } from './dto/update-file.dto';

@Injectable()
export class FilesService {

  private readonly PROTECTED_FILE_IDS = [8, 11, 16, 17, 18];

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

  async updateFileContent(fileId: number, newContent: Buffer, userId: string) {
    const file = await this.prisma.file.findUnique({ where: { file_id: fileId } });
  
    if (!file) {
      throw new NotFoundException('Fichier non trouvé');
    }
  
    if (file.user_id !== userId) {
      throw new ForbiddenException('Accès refusé');
    }
  
    return this.prisma.file.update({
      where: { file_id: fileId },
      data: {
        file: newContent,
        updated_at: new Date(),
      },
    });
  }
  
  

  async delete(id: number) {
    if (this.PROTECTED_FILE_IDS.includes(id)) {
      throw new ForbiddenException('Ce fichier est protégé et ne peut pas être supprimé.');
    }
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
