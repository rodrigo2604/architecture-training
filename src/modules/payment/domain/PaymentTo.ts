import { validateEmail } from '../../shared/application/validateEmail';
import { PaymentToError } from './errors/PaymentToError';

export class PaymentTo {
  private readonly _value: string;

  constructor(to: string) {
    const emailIsValid = validateEmail(to);

    if (!emailIsValid) {
      throw new PaymentToError();
    }

    this._value = to;
  }

  get value() {
    return this._value;
  }
}
