import { Controller, Get, Inject } from '@nestjs/common';
import { ErpBranchService } from 'src/erp/branch/service/branch.service';
import { ERP_BRANCH_SERVICE } from 'src/erp/common/constant/service.const';

@Controller('api/v1/erp/branch')
export class ErpBranchController {
  constructor(
    @Inject(ERP_BRANCH_SERVICE)
    private readonly erp_BranchService: ErpBranchService,
  ) {}

  @Get('branches')
  public async getBranches(): Promise<Array<Record<string, unknown>>> {
    try {
      return this.erp_BranchService.getBranches();
    } catch (err) {
      throw err;
    }
  }
}
