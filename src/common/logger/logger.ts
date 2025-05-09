import pino from 'pino';

const isProd = process.env.NODE_ENV === 'production';
const isTTY = process.stdout.isTTY;

export const logger = isProd || !isTTY
  ? pino({ level: process.env.LOG_LEVEL || 'info' })
  : pino({
      level: process.env.LOG_LEVEL || 'debug',
      transport: {
        target: 'pino-pretty',
        options: {
          colorize: true,
          translateTime: 'yyyy-mm-dd HH:MM:ss.l',
          ignore: 'pid,hostname',
        },
      },
    });
