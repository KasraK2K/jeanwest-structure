import { CreateBranchDto, GetBranchesResponseDto } from '../dto/branch.dto';

export interface BranchSrevice {
  getBranchesFromERP(): Promise<GetBranchesResponseDto[]>;
  getLocalBranches(): Promise<GetBranchesResponseDto[]>;
  insertBranchesInLocalDB(
    branch: CreateBranchDto,
  ): Promise<GetBranchesResponseDto>;
}
