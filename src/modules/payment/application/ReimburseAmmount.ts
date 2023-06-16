import { PGateway } from '../domain/PGateway';
import { Payment } from '../domain/Payment';
import { PaymentAmmout } from '../domain/PaymentAmmount';
import { PaymentTo } from '../domain/PaymentTo';

export class ReimburseAmmount {
  constructor(private pGateway: PGateway) {}

  apply(to: string, ammount: number): Promise<void> {
    const payment = new Payment(new PaymentTo(to), new PaymentAmmout(ammount));

    return this.pGateway.reimburse(payment);
  }
}
