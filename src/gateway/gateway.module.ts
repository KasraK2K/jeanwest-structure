import { Module } from '@nestjs/common';
import { InventoryModule } from 'src/inventory/inventory.module';
import { UserModule } from 'src/user/user.module';
import { inventoryControllers } from './inventory/controller/shared.controller';
import { inventoryProviders } from './inventory/provider/shared.provider';
import { userControllers } from './user/controller/shared.controller';
import { userProviders } from './user/provider/shared.provider';

@Module({
  imports: [InventoryModule, UserModule],
  controllers: [...inventoryControllers, ...userControllers],
  providers: [...inventoryProviders, ...userProviders],
})
export class GatewayModule {}
