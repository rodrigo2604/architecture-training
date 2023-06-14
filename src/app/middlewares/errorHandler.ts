import { Request, Response, NextFunction } from 'express';
import { HttpError } from '../errors/HttpError';
import { logger } from '../../modules/shared/application/logger';
import { DomainError } from '../../modules/shared/domain/DomainError';

export function errorHandler(err: unknown, _req: Request, res: Response, next: NextFunction): Response | void {
  if (err instanceof DomainError) {
    return res.status(typeof err.code === 'number' ? err.code : 400).json({
      code: err.code,
      message: err.message,
    });
  }

  if (err instanceof HttpError) {
    return res.status(err.code as number).json({
      code: err.code,
      message: err.message,
    });
  }

  if (err instanceof Error) {
    logger.error(err);

    return res.status(500).json({
      message: 'Internal Server Error',
    });
  }

  next(err);
}
