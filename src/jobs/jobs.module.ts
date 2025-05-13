import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.contoller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [JobsController],
  providers: [JobsService, PrismaService],
})
export class JobsModule {}