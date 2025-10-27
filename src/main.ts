import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerService } from './common/logger/logger.service';
import multipart from '@fastify/multipart';
import fastifyCors from '@fastify/cors';
import { ValidationPipe } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

import { SanitizeInterceptor } from './common/interceptors/sanitize.interceptor';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: false },
  );
  app.useGlobalInterceptors(new SanitizeInterceptor());

  const prisma = new PrismaClient();
  try {
    await prisma.$connect();
    console.log('✅ Connexion à la base de données réussie');
    await prisma.$disconnect();
  } catch (error) {
    console.error('❌ Erreur de connexion à la base de données:', error);
    process.exit(1);
  }

  const fastify = app.getHttpAdapter().getInstance();
  await fastify.register(multipart, {
    limits: {
      fileSize: 10 * 1024 * 1024,
    },
  });

  if (
    process.env.NODE_ENV === 'development' &&
    process.env.DEBUG_REQUESTS === 'true'
  ) {
    fastify.addHook('preValidation', (request, reply, done) => {
      if (request.body && Object.keys(request.body).length > 0) {
        console.log('--- RAW BODY ---');
        console.log(JSON.stringify(request.body, null, 2));
        console.log('----------------');
      }
      done();
    });
  }

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
  SwaggerModule.setup('docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: false,
      transform: true,
    }),
  );

  await app.register(fastifyCors, {
    origin:
      process.env.FRONTEND_ORIGIN ||
      'http://localhost:4200' ||
      'http://localhost:4321',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  });

  app.setGlobalPrefix('api');

  loggerService.log('🚀 Application is starting...');

  await app.listen(3000, '0.0.0.0');
}

bootstrap().catch((error) => {
  console.error("❌ Erreur lors du démarrage de l'application:", error);
  process.exit(1);
});
