import { Module } from '@nestjs/common';
import { TimesService } from './times.service';
import { TimesController } from './times.contoller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TimesController],
  providers: [TimesService, PrismaService],
})
export class TimesModule {}
