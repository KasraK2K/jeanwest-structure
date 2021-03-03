import { USER_CUSTOMER_SERVICE } from 'src/user/common/constant/service.const';
import { CustomerService } from 'src/user/customer/service/customer.service';

export const userProviders = [
  {
    provide: USER_CUSTOMER_SERVICE,
    useClass: CustomerService,
  },
];
