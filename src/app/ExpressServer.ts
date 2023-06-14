import * as express from 'express';
import { createServer } from 'node:http';
import { getRoutes } from './routes';
import { errorHandler } from './middlewares/errorHandler';
import { logger } from '../modules/shared/application/logger';

export class ExrpessServer {
  async start(): Promise<void> {
    const app = express();

    app.use('/api', getRoutes());
    app.use(errorHandler);

    return new Promise((resolve) => {
      const port = process.env.PORT || 3000;

      createServer(app).listen(port, () => {
        logger.info(`Http server is listening on port ${port}`);

        resolve();
      });
    });
  }
}
