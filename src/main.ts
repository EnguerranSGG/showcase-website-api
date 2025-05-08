import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { LoggerService } from './common/logger/logger.service';
import pinoHttp from 'pino-http';
import { logger } from './common/logger/logger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    { logger: false },
  );

  const loggerService = app.get(LoggerService);
  app.useLogger(loggerService);

  app.use(pinoHttp({ logger }));

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
