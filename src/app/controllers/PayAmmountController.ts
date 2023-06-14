import { NextFunction, Request, Response } from 'express';

import { PayAmmount } from '../../modules/payment/PayAmmount';

export class PaymentController {
  constructor(private payAmmount: PayAmmount) {}

  async apply(_req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const response = await this.payAmmount.apply();

      res.send(response);
    } catch (error) {
      next(error);
    }
  }
}
