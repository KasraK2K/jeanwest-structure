import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import {
  BRANCH_BRANCH_SERVICE,
  ERP_BRANCH_SERVICE,
} from 'src/branch/common/constant/service.const';
import { BRANCH_REPO } from '../../common/constant/repository.const';
import { branchRepository } from '../repository/branch.repository';
import { BranchService } from '../service/branch.service';
import { ErpBranchService } from 'src/erp/branch/service/branch.service';

export const branchProviders = [
  {
    provide: BRANCH_BRANCH_SERVICE,
    useClass: BranchService,
  },
  {
    provide: BRANCH_REPO,
    useClass: branchRepository,
    inject: [JW_TYPEORM_REPO],
  },
  {
    provide: ERP_BRANCH_SERVICE,
    useClass: ErpBranchService,
  },
];
