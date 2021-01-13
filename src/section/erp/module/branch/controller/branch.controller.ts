import { Controller, Get, Inject } from '@nestjs/common';
import { ERP_BRANCH_SERVICE } from 'src/section/erp/common/constant/service.const';
import { ERP_BranchService } from '../service/branch.service';

import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { GetBranchesResponseDto } from '../../branch/dto/branch.dto';

@ApiTags('ERP-BRANCH')
@Controller('api/v1/erp/branch')
export class ERP_BranchController {
  constructor(
    @Inject(ERP_BRANCH_SERVICE)
    private readonly erp_BranchService: ERP_BranchService,
  ) {}

  @Get('branches')
  @ApiResponse({ type: [GetBranchesResponseDto] })
  public async getBranches(): Promise<Array<Record<string, unknown>>> {
    try {
      return this.erp_BranchService.getBranches();
    } catch (err) {
      throw err;
    }
  }
}
