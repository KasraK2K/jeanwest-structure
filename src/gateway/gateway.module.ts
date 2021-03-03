import { Module } from '@nestjs/common';
import { BranchModule } from 'src/branch/branch.module';
import { ERPModule } from 'src/erp/erp.module';
import { InventoryModule } from 'src/inventory/inventory.module';
import { OtpModule } from 'src/otp/otp.module';
import { inventoryControllers } from './inventory/controller/shared.controller';
import { inventoryProviders } from './inventory/provider/shared.provider';
import { otpControllers } from './otp/controller/shared.controller';
import { otpProviders } from './otp/provider/otp.provider';
import { CustomerModule } from 'src/user/user.module';
import { branchControllers } from './branch/controller/shared.controller';
import { branchProviders } from './branch/provider/shared.provider';
import { erpControllers } from './erp/controller/shared.controller';
import { erpProviders } from './erp/provider/shared.provider';
import { userControllers } from './user/controller/shared.controller';
import { userProviders } from './user/provider/shared.provider';
import { gatewayProviders } from './provider/gateway.provider';

@Module({
  imports: [
    InventoryModule,
    CustomerModule,
    ERPModule,
    BranchModule,
    OtpModule,
  ],
  controllers: [
    ...inventoryControllers,
    ...userControllers,
    ...erpControllers,
    ...branchControllers,
    ...otpControllers,
  ],
  providers: [
    ...gatewayProviders,
    ...inventoryProviders,
    ...userProviders,
    ...erpProviders,
    ...branchProviders,
    ...otpProviders,
  ],
})
export class GatewayModule {}
