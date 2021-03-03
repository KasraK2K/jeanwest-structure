import { CUSTOMER_AUTH_SERVICE, CUSTOMER_LOCAL_STRATEGY,USER_CUSTOMER_SERVICE } from "src/auth/common/const/customer-auth.const";
import { CustomerService } from "src/user/customer/service/customer.service";
import { CustomerAuthService } from "../service/auth.service";
import { CustomerLocalStrategy } from "../strategy/local.strategy";

export const customerAuthProviders = [
    {
      provide: CUSTOMER_AUTH_SERVICE,
      useClass: CustomerAuthService,
    },
    {
      provide: CUSTOMER_LOCAL_STRATEGY,
      useClass: CustomerLocalStrategy,
    },
    {
      provide: USER_CUSTOMER_SERVICE,
      useClass: CustomerService,
    },
  ];