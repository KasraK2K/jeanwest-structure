import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { ErpBranchModule } from './branch/branch.module';
import { ErpProductModule } from './product/product.module';
import { ErpUserModule } from './user/user.module';

@Module({
  imports: [DatabaseModule, ErpBranchModule, ErpProductModule, ErpUserModule],
  exports: [ErpBranchModule, ErpProductModule, ErpUserModule],
})
export class ERPModule {}
