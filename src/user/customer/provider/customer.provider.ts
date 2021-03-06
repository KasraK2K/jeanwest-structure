import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { USER_CUSTOMER_SERVICE } from 'src/user/common/constant/service.const';
import { CUSTOMER_REPO } from '../../common/constant/repository.const';
import { CustomerRepository } from '../repository/customer.repository';
import { CustomerService } from '../service/customer.service';

export const customerProviders = [
  {
    provide: USER_CUSTOMER_SERVICE,
    useClass: CustomerService,
  },
  {
    provide: CUSTOMER_REPO,
    useClass: CustomerRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
