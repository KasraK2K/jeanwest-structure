import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ERP_BranchModule } from 'src/erp/branch/branch.module';
import { BranchesModule } from './branch/branches.module';

@Module({
  imports: [DatabaseModule, BranchesModule],
  exports: [BranchesModule],
})
export class BranchModule {}
