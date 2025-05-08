import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import { logger } from './logger';

@Injectable()
export class LoggerService implements NestLoggerService {
  log(message: string) {
    logger.info(message);
  }

  error(message: string, trace?: string) {
    logger.error({ trace }, message);
  }

  warn(message: string) {
    logger.warn(message);
  }

  debug(message: string) {
    logger.debug(message);
  }

  verbose(message: string) {
    logger.info(message);
  }
}
