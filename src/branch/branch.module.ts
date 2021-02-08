import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ErpBranchModule } from 'src/erp/branch/branch.module';
import { branchProviders } from './branch/provider/branch.provider';

@Module({
  imports: [DatabaseModule, ErpBranchModule],
  providers: [...branchProviders],
  exports: [...branchProviders],
})
export class BranchModule {}
