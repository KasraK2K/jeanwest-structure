import {
  CUSTOMER_AUTH_SERVICE,
  USER_CUSTOMER_SERVICE,
  CUSTOMER_LOCAL_STRATEGY,
  CUSTOMER_JWT_STRATEGY,
} from 'src/auth/common/const/customer-auth.const';
import { CustomerService } from 'src/user/customer/service/customer.service';
import { CustomerAuthService } from '../service/auth.service';
import { CustomerJwtStrategy } from '../strategy/jwt.strategy';
import { CustomerLocalStrategy } from '../strategy/local.strategy';

export const customerAuthProviders = [
  {
    provide: CUSTOMER_AUTH_SERVICE,
    useClass: CustomerAuthService,
  },
  {
    provide: USER_CUSTOMER_SERVICE,
    useClass: CustomerService,
  },
  {
    provide: CUSTOMER_LOCAL_STRATEGY,
    useClass: CustomerLocalStrategy,
  },
  {
    provide: CUSTOMER_JWT_STRATEGY,
    useClass: CustomerJwtStrategy,
  },
];
