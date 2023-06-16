import { DomainError } from '../../../shared/domain/DomainError';

export class PaymentToError extends DomainError {
  constructor() {
    super(400, 'Payment should be applied to an email account');
  }
}
