import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { TypesService } from './types.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  controllers: [TypesController],
  providers: [TypesService, PrismaService],
})
export class TypesModule {}
