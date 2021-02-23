import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { USER_USER_AUTH_SERVICE } from 'src/user/common/constant/service.const';
import { ACCOUNT_REPO } from '../../common/constant/repository.const';
import { accountRepository } from '../repository/user-auth.repository';
import { UserAuthService } from '../service/user-auth.service';

export const userAuthProviders = [
  {
    provide: USER_USER_AUTH_SERVICE,
    useClass: UserAuthService,
  },
  {
    provide: ACCOUNT_REPO,
    useClass: accountRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
