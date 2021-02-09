import { ERP_USER_SERVICE } from 'src/erp/common/constant/service.const';
import { ErpUserService } from 'src/erp/user/service/user.service';

export const erpUserProviders = [
  {
    provide: ERP_USER_SERVICE,
    useClass: ErpUserService,
  },
];
