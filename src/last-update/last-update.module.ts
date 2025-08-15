import { Module } from '@nestjs/common';
import { LastUpdateController } from './last-update.controller';
import { LastUpdateService } from './last-update.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LastUpdateController],
  providers: [LastUpdateService],
  exports: [LastUpdateService],
})
export class LastUpdateModule {}

