import { Module } from '@nestjs/common';
import { BranchModule } from 'src/branch/branch.module';
import { ERPModule } from 'src/erp/erp.module';
import { InventoryModule } from 'src/inventory/inventory.module';
import { UserModule } from 'src/user/user.module';
import { branchControllers } from './branch/controller/shared.controller';
import { branchProviders } from './branch/provider/shared.provider';
import { erpControllers } from './erp/controller/shared.controller';
import { erpProviders } from './erp/provider/shared.provider';
import { inventoryControllers } from './inventory/controller/shared.controller';
import { inventoryProviders } from './inventory/provider/shared.provider';
import { userControllers } from './user/controller/shared.controller';
import { userProviders } from './user/provider/shared.provider';

@Module({
  imports: [InventoryModule, UserModule, ERPModule, BranchModule],
  controllers: [
    ...inventoryControllers,
    ...userControllers,
    ...erpControllers,
    ...branchControllers,
  ],
  providers: [
    ...inventoryProviders,
    ...userProviders,
    ...erpProviders,
    ...branchProviders,
  ],
})
export class GatewayModule {}
