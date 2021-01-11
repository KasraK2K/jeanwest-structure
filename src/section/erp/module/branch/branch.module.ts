import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ERP_BranchController } from './controller/branch.controller';
import { erpBranchProviders } from './provider/branch.provider';

@Module({
  imports: [DatabaseModule],
  providers: [...erpBranchProviders],
  controllers: [ERP_BranchController],
  exports: [...erpBranchProviders],
})
export class ERP_BranchModule {}
