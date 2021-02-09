import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ERP_BranchModule } from './branch/branch.module';
import { ErpProductModule } from './product/product.module';
import { ERP_UserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, ERP_BranchModule, ErpProductModule, ERP_UserModule],
  exports: [ERP_BranchModule, ErpProductModule, ERP_UserModule],
})
export class ERPModule {}
