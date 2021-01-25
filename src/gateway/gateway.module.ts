import { Module } from '@nestjs/common';
import { InventoryModule } from 'src/inventory/inventory.module';
import { inventoryControllers } from './inventory/controller/shared.controller';
import { inventoryProviders } from './inventory/provider/shared.provider';

@Module({
  imports: [InventoryModule],
  controllers: [...inventoryControllers],
  providers: [...inventoryProviders],
})
export class GatewayModule {}
