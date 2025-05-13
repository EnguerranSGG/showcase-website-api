import { Module } from '@nestjs/common';
import { PathsController } from './paths.controller';
import { PathsService } from './paths.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [PathsController],
  providers: [PathsService, PrismaService],
})
export class PathsModule {}