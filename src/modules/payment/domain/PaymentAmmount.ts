import { PaymentAmmoutError } from './errors/PaymentAmmountError';

export class PaymentAmmout {
  private readonly _value: number;

  constructor(ammount: number) {
    if (!ammount || ammount < 0) {
      throw new PaymentAmmoutError();
    }

    this._value = ammount;
  }

  get value() {
    return this._value;
  }
}
