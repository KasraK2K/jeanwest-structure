import { Inject, Injectable } from '@nestjs/common';
import { ERP_BRANCH_REPO } from 'src/section/erp/common/constant/repository.const';
import { ERP_BranchSrevice } from '../interface/branch-service.interface';
import { getBranchesQuery } from '../query/raw-query';

@Injectable()
export class ERP_BranchService implements ERP_BranchSrevice {
  constructor(
    @Inject(ERP_BRANCH_REPO)
    private readonly repository,
  ) {}

  public async getBranches(): Promise<Array<Record<string, unknown>>> {
    return this.repository.runQuery(getBranchesQuery());
  }
}
