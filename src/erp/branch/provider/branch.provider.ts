import { ERP_TYPEORM_REPO } from 'src/common/constant/database.const';
import { ERP_BRANCH_SERVICE } from 'src/erp/common/constant/service.const';
import { ERP_BRANCH_REPO } from '../../common/constant/repository.const';
import { ERPRepository } from '../../common/repository/mainRepo';
import { ErpBranchService } from '../service/branch.service';
export const erpBranchProviders = [
  {
    provide: ERP_BRANCH_SERVICE,
    useClass: ErpBranchService,
  },
  {
    provide: ERP_BRANCH_REPO,
    useClass: ERPRepository,
    inject: [ERP_TYPEORM_REPO],
  },
];
