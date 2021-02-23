import { AddressService } from 'src/user/user/address/service/address.service';
import { USER_ADDRESS_SERVICE } from 'src/user/common/constant/service.const';

export const addressProviders = [
  {
    provide: USER_ADDRESS_SERVICE,
    useClass: AddressService,
  },
];
