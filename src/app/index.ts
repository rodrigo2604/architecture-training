import { exit } from 'node:process';
import { logger } from '../modules/shared/application/logger';
import { ExrpessServer } from './ExpressServer';

const app = new ExrpessServer();

app
  .start()
  .then(() => {
    logger.info('Payment App successfully up!');
  })
  .catch((error) => {
    logger.error(error);

    exit(1);
  });

process.on('uncaughtException', (err) => {
  logger.error(err, 'uncaughtException');
  exit(1);
});

process.on('unhandledRejection', (err) => {
  logger.error(err, 'unhandledRejection');
  exit(1);
});
