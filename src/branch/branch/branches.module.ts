import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { erpBranchProviders } from 'src/erp/branch/provider/branch.provider';
import { ErpBranchService } from 'src/erp/branch/service/branch.service';
import { branchProviders } from './provider/branch.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...branchProviders],
  exports: [...branchProviders],
})
export class BranchesModule {}
