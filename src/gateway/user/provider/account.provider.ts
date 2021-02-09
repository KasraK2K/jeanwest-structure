import { AccountService } from 'src/user/account/service/account.service';
import { USER_ACCOUNT_SERVICE } from 'src/gateway/user/common/constant/user.const';

export const accountProviders = [
  {
    provide: USER_ACCOUNT_SERVICE,
    useClass: AccountService,
  },
];
