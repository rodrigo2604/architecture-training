import { pino } from 'pino';

export const logger = pino({
  transport:
    process.env.LOG_PRETTY === 'true'
      ? {
          target: 'pino-pretty',
          options: {
            translateTime: 'UTC:yyyy-mm-dd HH:MM:ss.l o',
            ignore: 'severity',
          },
        }
      : undefined,
  level: process.env.LOG_LEVEL || 'info',
});
