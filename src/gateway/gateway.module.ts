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
import { AuthModule } from 'src/auth/auth.module';
import { authProviders } from './auth/provider/shared.provider';
import { authControllers } from './auth/controller/shared.controller';
import { HelloModule } from 'src/hello/hello.module';
import { helloController } from './hello/controller/shared.controller';
import { helloProvider } from './hello/provider/hello.provider';

@Module({
  imports: [
    InventoryModule,
    AuthModule,
    CustomerModule,
    ERPModule,
    BranchModule,
    OtpModule,
    HelloModule,
  ],
  controllers: [
    ...authControllers,
    ...inventoryControllers,
    ...userControllers,
    ...erpControllers,
    ...branchControllers,
    ...otpControllers,
    ...helloController,
  ],
  providers: [
    ...gatewayProviders,
    ...authProviders,
    ...userProviders,
    ...inventoryProviders,
    ...erpProviders,
    ...branchProviders,
    ...otpProviders,
    ...helloProvider,
  ],
})
export class GatewayModule {}
