import { Router } from 'express';
import { PayAmmount } from '../../modules/payment/PayAmmount';
import { PaymentController } from '../controllers/PayAmmountController';

export function getPaymentRoutes() {
  const router = Router();
  const paymentController = new PaymentController(new PayAmmount());

  router.post('/pay', async (req, res, next) => await paymentController.apply(req, res, next));

  return router;
}
