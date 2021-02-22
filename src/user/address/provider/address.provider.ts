import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { USER_ADDRESS_SERVICE } from 'src/user/common/constant/service.const';
import { ADDRESS_REPO } from '../../common/constant/repository.const';
import { addressRepository } from '../repository/address.repository';
import { AddressService } from '../service/address.service';

export const addressProviders = [
  {
    provide: USER_ADDRESS_SERVICE,
    useClass: AddressService,
  },
  {
    provide: ADDRESS_REPO,
    useClass: addressRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
