import { HELLO_SERVICE } from './../common/constant/hello.const';
import { HelloService } from '../service/hello.service';
import { HelloRepository } from '../repository/hello.repository';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { HELLO_REPO } from '../common/constant/repository.const';

export const helloProvider = [
  {
    provide: HELLO_SERVICE,
    useClass: HelloService,
  },
  {
    provide: HELLO_REPO,
    useClass: HelloRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
