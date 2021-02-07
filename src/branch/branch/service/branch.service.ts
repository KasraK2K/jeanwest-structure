import { Inject, Injectable } from '@nestjs/common';
import { BRANCH_REPO } from 'src/branch/common/constant/repository.const';
import { ErpBranchService } from 'src/erp/branch/service/branch.service';
import { ERP_BRANCH_REPO } from 'src/erp/common/constant/repository.const';
import { GetBranchesResponseDto } from '../dto/branch.dto';
import { BranchSrevice } from '../interface/branch.interface';

@Injectable()
export class BranchService implements BranchSrevice {
  constructor(
    @Inject(BRANCH_REPO)
    private readonly repository,
  ) {}

  async getBranchesFromERP(): Promise<GetBranchesResponseDto[]> {
    try {
      // const erpBranches = await this.erpBranchService.getBranches();
      // return erpBranches;
      return [];
    } catch (err) {
      throw err;
    }
  }

  async getLocalBranches(): Promise<GetBranchesResponseDto[]> {
    try {
      const erpBranches = this.getBranchesFromERP();
      return erpBranches;
    } catch (err) {
      throw err;
    }
  }

  async insertBranchesInLocalDB(): Promise<GetBranchesResponseDto[]> {
    try {
      return this.repository.create();
    } catch (err) {
      throw err;
    }
  }
}
