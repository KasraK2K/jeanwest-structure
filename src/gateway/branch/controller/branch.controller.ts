import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { BRANCH_BRANCH_SERVICE } from '../common/constant/branch.const';
import { BranchService } from 'src/branch/branch/service/branch.service';
import { GetBranchesResponseDto } from 'src/branch/branch/dto/branch.dto';

@Controller('branch')
export class BranchController {
  constructor(
    @Inject(BRANCH_BRANCH_SERVICE)
    private readonly branchService: BranchService,
  ) {}

  @Get('setBranches')
  async setBranches(): Promise<void> {
    try {
      return this.branchService.setBranches();
    } catch (err) {}
  }

  @Get('allBranches')
  async getLocalBranches(): Promise<GetBranchesResponseDto[]> {
    try {
      return this.branchService.getLocalBranches();
    } catch (err) {}
  }

  @Post('nearBranches')
  async getNearBranch(
    @Body() body: { long: number; lat: number },
  ): Promise<GetBranchesResponseDto[]> {
    try {
      return this.branchService.getNearBranches(body.long, body.lat);
    } catch (err) {}
  }

  @Post('singleBranch')
  async getSingleBranchById(
    @Body() body: { id: string | number },
  ): Promise<GetBranchesResponseDto> {
    try {
      const branch = await this.branchService.getBranchById(body.id);
      return branch;
    } catch (err) {}
  }
}
