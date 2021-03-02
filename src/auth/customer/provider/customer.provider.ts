import { CUSTOMER_AUTH_SERVICE, CUSTOMER_LOCAL_STRATEGY } from "src/auth/common/const/customer-auth.const";
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
  ];