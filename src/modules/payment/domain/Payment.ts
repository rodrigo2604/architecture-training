import { PaymentAmmout } from './PaymentAmmount';
import { PaymentTo } from './PaymentTo';

export class Payment {
  constructor(private readonly to: PaymentTo, private readonly ammount: PaymentAmmout) {}

  toPrimitives() {
    return {
      to: this.to.value,
      ammount: this.ammount.value,
    };
  }
}
