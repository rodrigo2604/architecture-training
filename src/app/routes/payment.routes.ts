import { Router } from 'express';
import { PayAmmount } from '../../modules/payment/application/PayAmmount';
import { PaymentController } from '../controllers/PayAmmountController';
import { getPGateway } from './getPGateway';

export function getPaymentRoutes() {
  const router = Router();

  const pGateway = getPGateway();
  const paymentController = new PaymentController(new PayAmmount(pGateway));

  router.post('/pay', async (req, res, next) => await paymentController.apply(req, res, next));

  return router;
}
