import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_FILTER } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { LoggerModule } from './common/logger/logger.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { RolesGuard } from './auth/guards/roles.guard';
import { TypesModule } from './types/types.module';
import { StatisticsModule } from './statistics/statistics.module';
import { PathsModule } from './paths/paths.module';
import { StepsModule } from './steps/steps.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { TimesModule } from './times/times.module';
import { PartnersModule } from './partners/partners.module';
import { StructuresModule } from './structures/structures.module';
import { NewsModule } from './news/news.module';
import { ValuesModule } from './values/values.module';
import { FilesModule } from './files/files.module';
import { MissionsModule } from './missions/missions.modules';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    TypesModule,
    StatisticsModule,
    PathsModule,
    StepsModule,
    LoggerModule,
    JobOffersModule,
    TimesModule,
    PartnersModule,
    StructuresModule,
    MissionsModule,
    NewsModule,
    ValuesModule,
    FilesModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
