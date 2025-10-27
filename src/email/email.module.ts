import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { EmailCleanupService } from './email-cleanup.service';
import { PrismaService } from '../prisma/prisma.service';

@Module({
  imports: [ConfigModule, ScheduleModule.forRoot()],
  providers: [EmailService, EmailCleanupService, PrismaService],
  controllers: [EmailController],
  exports: [EmailService],
})
export class EmailModule {}
