import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ERP_BRANCH_SERVICE } from 'src/section/erp/common/constant/service.const';
import { ERP_BranchService } from '../service/branch.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('ERP-BRANCH')
@Controller('erp-branch')
export class ERP_BranchController {
  constructor(
    @Inject(ERP_BRANCH_SERVICE)
    private readonly erp_BranchService: ERP_BranchService,
  ) {}

  @Get('getBranches')
  public async getBranches(): Promise<Array<Record<string, unknown>>> {
    return this.erp_BranchService.getBranches();
  }
}
