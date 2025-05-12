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
import { PathsModule } from './paths/paths.module';
import { StepsModule } from './steps/steps.module';
import { JobOffersModule } from './job-offers/job-offers.module';
import { TimesModule } from './times/times.module';
import { PartnersModule } from './partners/partners.module';
import { StructuresModule } from './structures/structures.module';
import { NewsModule } from './news/news.module';
import { ValuesModule } from './values/values.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UsersModule,
    TypesModule,
    StatisticsModule,
    PositionsModule,
    JobsModule,
    PathsModule,
    StepsModule,
    LoggerModule,
    JobOffersModule,
    TimesModule,
    PartnersModule,
    StructuresModule,
    NewsModule,
    ValuesModule,
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
  ],
})
export class AppModule {}
