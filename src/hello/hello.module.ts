import { HttpModule, Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { helloProvider } from './provider/hello.provider';

@Module({
  imports: [DatabaseModule, HttpModule],
  providers: [...helloProvider],
  exports: [...helloProvider, HttpModule],
})
export class HelloModule {}
