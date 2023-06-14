import { DomainError } from '../../modules/shared/domain/DomainError';

export class HttpError extends DomainError {
  constructor(code: number, message: string) {
    super(code, message);
  }
}
