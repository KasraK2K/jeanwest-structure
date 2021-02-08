import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { erpBranchProviders } from './provider/branch.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpBranchProviders],
  exports: [...erpBranchProviders],
})
export class ErpBranchModule {}
