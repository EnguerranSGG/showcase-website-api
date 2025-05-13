import { Module } from '@nestjs/common';
import { FilesService } from './files.service';
import { FilesController } from './files.contoller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [FilesController],
  providers: [FilesService, PrismaService],
})
export class FilesModule {}