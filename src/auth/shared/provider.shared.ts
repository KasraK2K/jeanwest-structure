import { CUSTOMER_AUTH_SERVICE } from "../common/const/customer-auth.const";
import { CustomerAuthService } from "../customer/service/auth.service";

export const sharedProviders = [
    {
      provide: CUSTOMER_AUTH_SERVICE,
      useClass: CustomerAuthService,
    },
  ];