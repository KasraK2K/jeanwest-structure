import { Module } from '@nestjs/common';
import { InventoryModule } from 'src/inventory/inventory.module';
import { OtpModule } from 'src/otp/otp.module';
import { inventoryControllers } from './inventory/controller/shared.controller';
import { inventoryProviders } from './inventory/provider/shared.provider';
import { otpControllers } from './otp/controller/shared.controller';
import { otpProviders } from './otp/provider/otp.provider';

@Module({
  imports: [InventoryModule, OtpModule],
  controllers: [...inventoryControllers, ...otpControllers],
  providers: [...inventoryProviders, ...otpProviders],
})
export class GatewayModule {}
