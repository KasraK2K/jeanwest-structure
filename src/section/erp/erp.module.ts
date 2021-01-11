import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ERP_BranchModule } from './module/branch/branch.module';
import { ERP_ProductModule } from './module/product/product.module';

@Module({
  imports: [DatabaseModule, ERP_BranchModule, ERP_ProductModule],
  exports: [ERP_BranchModule, ERP_ProductModule],
})
export class ERPModule {}
