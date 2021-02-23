import { CacheModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { userAuthProviders } from './user-auth/provider/user-auth.provider';
import { addressProviders } from './user/address/provider/address.provider';
import { userProviders } from './user/provider/user.provider';

@Module({
  imports: [DatabaseModule, CacheModule.register()],
  providers: [...userAuthProviders, ...addressProviders, ...userProviders],
  exports: [
    ...userAuthProviders,
    ...addressProviders,
    ...userProviders,
    CacheModule.register(),
  ],
})
export class UserModule {}
