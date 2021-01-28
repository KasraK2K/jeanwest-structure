import { Inject, Injectable } from '@nestjs/common';
import { ERP_BRANCH_REPO } from 'src/erp/common/constant/repository.const';
import { ERP_BranchSrevice } from '../interface/branch-service.interface';
import { getBranchesQuery } from '../query/raw-query';

@Injectable()
export class ErpBranchService implements ERP_BranchSrevice {
  constructor(
    @Inject(ERP_BRANCH_REPO)
    private readonly repository,
  ) {}

  public async getBranches(): Promise<Array<Record<string, unknown>>> {
    const branches = await this.repository.runQuery(getBranchesQuery());
    branches.map((branch) => {
      branch.LocationPoint = branch.LocationPoint.split(',');
      branch.long = branch.LocationPoint[0];
      branch.lat = branch.LocationPoint[1];
      return branch;
    });
    return branches;
  }
}
