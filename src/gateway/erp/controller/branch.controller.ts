import { Controller, Get, Inject } from '@nestjs/common';
import errorHandler from 'src/common/error/error.handler';
import { ErpBranchService } from 'src/erp/branch/service/branch.service';
import { ERP_BRANCH_SERVICE } from 'src/erp/common/constant/service.const';
import { clientSideError } from 'src/common/constant/http.map.const';

@Controller('erp/branch')
export class ErpBranchController {
  constructor(
    @Inject(ERP_BRANCH_SERVICE)
    private readonly erp_BranchService: ErpBranchService,
  ) {}

  @Get('branches')
  public async getBranches(): Promise<Array<Record<string, unknown>>> {
    try {
      return this.erp_BranchService.getBranches();
    } catch {
      errorHandler({ name: clientSideError.HTTP_EQUIVALENT_STATUSCODE_418 });
    }
  }
}
