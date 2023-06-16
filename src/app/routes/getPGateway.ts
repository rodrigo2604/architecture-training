import { PGateway } from '../../modules/payment/domain/PGateway';
import { PGateway_1 } from '../../modules/payment/infrastructure/PGateway_1';
import { PGateway_2 } from '../../modules/payment/infrastructure/PGateway_2';

enum Gateways {
  PGATEWAY_1,
  PGATEWAY_2,
}

const gatewayMap: Record<string, () => PGateway> = {
  [Gateways.PGATEWAY_1]: () => new PGateway_1(),
  [Gateways.PGATEWAY_2]: () => new PGateway_2(),
  unsupported: () => {
    throw new Error('Gateway not supported');
  },
};

export function getPGateway(): PGateway {
  const gatewayType = process.env.USE_GATEWAY as unknown as Gateways;

  return gatewayMap[gatewayType]();
}
