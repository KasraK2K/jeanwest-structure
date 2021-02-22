import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { USER_USER_SERVICE } from 'src/user/common/constant/service.const';
import { USER_REPO } from '../../common/constant/repository.const';
import { UserRepository } from '../repository/user.repository';
import { UserService } from '../service/user.service';

export const userProviders = [
  {
    provide: USER_USER_SERVICE,
    useClass: UserService,
  },
  {
    provide: USER_REPO,
    useClass: UserRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
