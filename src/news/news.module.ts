import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.contoller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [NewsController],
  providers: [NewsService, PrismaService],
})
export class NewsModule {}
