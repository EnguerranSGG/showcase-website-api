import { Module } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import { JobOffersController } from './job-offers.contoller';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [JobOffersController],
  providers: [JobOffersService, PrismaService],
})
export class JobOffersModule {}
