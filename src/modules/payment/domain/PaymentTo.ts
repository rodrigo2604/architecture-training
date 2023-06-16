import { PaymentToError } from './errors/PaymentToError';

export class PaymentTo {
  private readonly _value: string;

  constructor(to: string) {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (!emailRegex.test(to)) {
      throw new PaymentToError();
    }

    this._value = to;
  }

  get value() {
    return this._value;
  }
}
