import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { BRANCH_BRANCH_SERVICE } from 'src/branch/common/constant/service.const';
import { BranchService } from 'src/branch/branch/service/branch.service';
import { GetBranchesResponseDto } from 'src/branch/branch/dto/branch.dto';

@Controller('branch')
export class BranchController {
  constructor(
    @Inject(BRANCH_BRANCH_SERVICE)
    private readonly branchService: BranchService,
  ) {}

  @Get('/branches')
  async getLocalBranchs(): Promise<GetBranchesResponseDto[]> {
    try {
      return this.branchService.getLocalBranches();
    } catch (err) {}
  }

  @Post('/branch')
  async getBranch(
    @Body() body: { id: string | number },
  ): Promise<GetBranchesResponseDto> {
    try {
      return [];
    } catch (err) {}
  }

  @Post('/branchByMobile')
  async getBranchByMobile(
    @Body() body: { mobile: string },
  ): Promise<GetBranchesResponseDto> {
    try {
      return [];
    } catch (err) {}
  }
}
