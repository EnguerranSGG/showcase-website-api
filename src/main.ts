import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerService } from './common/logger/logger.service';
import multipart from '@fastify/multipart'; 

import { PrismaClient } from '@prisma/client';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: false },
  );

  const prisma = new PrismaClient();
  await prisma.$connect();
  await prisma.$disconnect();

  const fastify = app.getHttpAdapter().getInstance();
  await fastify.register(multipart);

  console.log('NODE_ENV =', process.env.NODE_ENV);

  const loggerService = app.get(LoggerService);
  app.useLogger(loggerService);

  loggerService.log('LoggerService fonctionne ✅');

  const config = new DocumentBuilder()
    .setTitle('Showcase API')
    .setDescription('Documentation de l’API du site vitrine')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  loggerService.log('🚀 Application is starting...');

  await app.listen(3000, '0.0.0.0');
}

bootstrap();
