import { Injectable, LoggerService as NestLoggerService } from '@nestjs/common';
import { logger } from './logger';

@Injectable()
export class LoggerService implements NestLoggerService {
  log(message: any, context?: string) {
    logger.info({ msg: message, context });
  }

  error(message: any, trace?: string, context?: string) {
    logger.error({ msg: message, trace, context });
  }

  warn(message: any, context?: string) {
    logger.warn({ msg: message, context });
  }

  debug(message: any, context?: string) {
    logger.debug({ msg: message, context });
  }

  verbose(message: any, context?: string) {
    logger.trace({ msg: message, context });
  }
}
