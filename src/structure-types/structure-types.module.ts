import { Module } from '@nestjs/common';
import { StructureTypesService } from './structure-types.service';
import { StructureTypesController } from './structure-types.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [StructureTypesController],
  providers: [StructureTypesService],
  exports: [StructureTypesService],
})
export class StructureTypesModule {} 