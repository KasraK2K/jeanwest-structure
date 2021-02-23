import { UserAuthService } from 'src/user/user-auth/service/user-auth.service';
import { USER_USER_AUTH_SERVICE } from 'src/gateway/user/common/constant/user.const';

export const userAuthProviders = [
  {
    provide: USER_USER_AUTH_SERVICE,
    useClass: UserAuthService,
  },
];
