import { CustomerAuthService } from 'src/auth/customer/service/auth.service';
import { CUSTOMER_AUTH_SERVICE } from '../common/constant/auth.const';

export const customerAuthProviders = [
  {
    provide: CUSTOMER_AUTH_SERVICE,
    useClass: CustomerAuthService,
  },
];
