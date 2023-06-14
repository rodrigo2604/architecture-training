import { Router } from 'express';
import { getPaymentRoutes } from './payment.routes';

export function getRoutes() {
  const router = Router();
  const paymentRoutes = getPaymentRoutes();

  router.use('/payment', paymentRoutes);

  return router;
}
