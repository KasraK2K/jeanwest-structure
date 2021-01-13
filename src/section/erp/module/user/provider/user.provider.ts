import { ERP_TYPEORM_REPO } from 'src/common/constant/database.const';
import { ERP_USER_SERVICE } from 'src/section/erp/common/constant/service.const';
import { ERP_USER_REPO } from '../../../common/constant/repository.const';
import { ERPRepository } from '../../../common/repository/mainRepo';
import { ERP_UserService } from '../service/user.service';
export const erpUserProviders = [
  {
    provide: ERP_USER_SERVICE,
    useClass: ERP_UserService,
  },
  {
    provide: ERP_USER_REPO,
    useClass: ERPRepository,
    inject: [ERP_TYPEORM_REPO],
  },
];
