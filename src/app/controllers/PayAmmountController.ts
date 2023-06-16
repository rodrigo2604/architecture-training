import { NextFunction, Request, Response } from 'express';

import { PayAmmount } from '../../modules/payment/application/PayAmmount';

export class PaymentController {
  constructor(private payAmmount: PayAmmount) {}

  async apply(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { to, ammount } = req.body;
      // Validate body parsing with a validator
      const response = await this.payAmmount.apply(to, ammount);

      res.status(202);
      res.send(response);
    } catch (error) {
      next(error);
    }
  }
}
