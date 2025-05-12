import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './common/logger/logger.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { TypesModule } from './types/types.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PositionsModule } from './positions/positions.module';
import { JobsModule } from './jobs/jobs.module';

@Module({
  imports: [PrismaModule, AuthModule, UsersModule, TypesModule, StatisticsModule, PositionsModule, JobsModule, LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}` 
    })
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: JwtAuthGuard,
  },
  {
    provide: APP_GUARD,
    useClass: RolesGuard,
  }],
})
export class AppModule {}
