import { Payment } from './Payment';

export interface PGateway {
  pay(payment: Payment): Promise<void>;
  reimburse(payment: Payment): Promise<void>;
}
