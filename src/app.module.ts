import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD, APP_FILTER } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
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
    // Configuration du rate limiting global et spécialisé
    ThrottlerModule.forRoot([
      {
        name: 'short',
        ttl: 60000, // 1 minute
        limit: 20, // 20 requêtes par minute par IP
      },
      {
        name: 'medium', 
        ttl: 300000, // 5 minutes
        limit: 100, // 100 requêtes par 5 minutes par IP
      },
      {
        name: 'long',
        ttl: 3600000, // 1 heure
        limit: 1000, // 1000 requêtes par heure par IP
      },
      // Limiteurs spécialisés
      {
        name: 'auth',
        ttl: 60000, // 1 minute
        limit: 5, // 5 tentatives de connexion par minute
      },
      {
        name: 'upload',
        ttl: 60000, // 1 minute
        limit: 10, // 10 uploads par minute
      },
      {
        name: 'write',
        ttl: 60000, // 1 minute
        limit: 30, // 30 opérations d'écriture par minute
      },
    ]),
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
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
    {
      provide: APP_FILTER,
      useClass: GlobalExceptionFilter,
    },
  ],
})
export class AppModule {}
