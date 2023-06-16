import { DomainError } from '../../../shared/domain/DomainError';

export class PaymentAmmoutError extends DomainError {
  constructor() {
    super(400, 'Amount should be a positive number');
  }
}
