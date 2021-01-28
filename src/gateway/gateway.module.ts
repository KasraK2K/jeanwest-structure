import { Module } from '@nestjs/common';
import { ERPModule } from 'src/erp/erp.module';
import { InventoryModule } from 'src/inventory/inventory.module';
import { UserModule } from 'src/user/user.module';
import { erpControllers } from './erp/controller/shared.controller';
import { erpProviders } from './erp/provider/shared.provider';
import { inventoryControllers } from './inventory/controller/shared.controller';
import { inventoryProviders } from './inventory/provider/shared.provider';
import { userControllers } from './user/controller/shared.controller';
import { userProviders } from './user/provider/shared.provider';

@Module({
  imports: [InventoryModule, UserModule, ERPModule],
  controllers: [...inventoryControllers, ...userControllers, ...erpControllers],
  providers: [...inventoryProviders, ...userProviders, ...erpProviders],
})
export class GatewayModule {}
