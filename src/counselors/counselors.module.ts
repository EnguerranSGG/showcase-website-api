import { Module } from '@nestjs/common';
import { CounselorsService } from './counselors.service';
import { CounselorsController } from './counselors.controller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [CounselorsController],
  providers: [CounselorsService, PrismaService],
})
export class CounselorsModule {}
