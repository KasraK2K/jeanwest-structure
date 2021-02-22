import { UserAuthService } from 'src/user/user-auth/service/user-auth.service';
import { USER_ACCOUNT_SERVICE } from 'src/gateway/user/common/constant/user.const';

export const userAuthProviders = [
  {
    provide: USER_ACCOUNT_SERVICE,
    useClass: UserAuthService,
  },
];
