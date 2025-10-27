import { Module } from '@nestjs/common';
import { StepsService } from './steps.service';
import { StepsController } from './steps.contoller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [StepsController],
  providers: [StepsService, PrismaService],
})
export class StepsModule {}
