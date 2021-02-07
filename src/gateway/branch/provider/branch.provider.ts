import { BranchService } from 'src/branch/branch/service/branch.service';
import {
  BRANCH_BRANCH_SERVICE,
  ERP_BRANCH_SERVICE,
} from 'src/branch/common/constant/service.const';
import { ErpBranchService } from 'src/erp/branch/service/branch.service';

export const branchesProviders = [
  {
    provide: BRANCH_BRANCH_SERVICE,
    useClass: BranchService,
  },
  {
    provide: ERP_BRANCH_SERVICE,
    useClass: ErpBranchService,
  },
];
