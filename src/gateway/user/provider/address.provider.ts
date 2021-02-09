import { AddressService } from 'src/user/address/service/address.service';
import { PERSON_ADDRESS_SERVICE } from 'src/user/common/constant/service.const';

export const addressProviders = [
  {
    provide: PERSON_ADDRESS_SERVICE,
    useClass: AddressService,
  },
];
