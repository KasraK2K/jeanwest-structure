import { ErpBranchService } from 'src/erp/branch/service/branch.service';
import { ERP_BRANCH_SERVICE } from 'src/erp/common/constant/service.const';

export const erpBranchProviders = [
  {
    provide: ERP_BRANCH_SERVICE,
    useClass: ErpBranchService,
  },
];
