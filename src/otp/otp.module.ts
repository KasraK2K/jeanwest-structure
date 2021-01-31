import { Module } from '@nestjs/common';

@Module({
  providers: [...productProviders],
  exports: [...productProviders],
})
export class OtpModule {}
