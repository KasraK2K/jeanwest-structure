import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { USER_ACCOUNT_SERVICE } from 'src/user/common/constant/service.const';
import { ACCOUNT_REPO } from '../../common/constant/repository.const';
import { accountRepository } from '../repository/account.repository';
import { AccountService } from '../service/account.service';

export const accountProviders = [
  {
    provide: USER_ACCOUNT_SERVICE,
    useClass: AccountService,
  },
  {
    provide: ACCOUNT_REPO,
    useClass: accountRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
