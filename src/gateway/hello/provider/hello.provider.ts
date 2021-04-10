import { HelloService } from 'src/hello/service/hello.service';
import { HELLO_SERVICE } from './../common/constant/hello.const';

export const helloProvider = [
  {
    provide: HELLO_SERVICE,
    useClass: HelloService,
  },
];
