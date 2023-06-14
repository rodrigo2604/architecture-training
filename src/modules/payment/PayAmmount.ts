import { DomainError } from '../shared/domain/DomainError';

export class PayAmmount {
  apply(): Promise<void> { 
    throw new DomainError(405, 'Method not implemented');
  }
}
