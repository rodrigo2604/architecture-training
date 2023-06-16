import { logger } from '../../shared/application/logger';
import { PGateway } from '../domain/PGateway';
import { Payment } from '../domain/Payment';

export class PGateway_2 implements PGateway {
  async pay(payment: Payment): Promise<void> {
    const { ammount, to } = payment.toPrimitives();

    logger.info(`Paying ${ammount} to ${to} with pgateway_2`);

    return;
  }

  async reimburse(payment: Payment): Promise<void> {
    const { ammount, to } = payment.toPrimitives();

    logger.info(`Reimbursing ${ammount} to ${to} to pgateway_2`);

    return;
  }
}
