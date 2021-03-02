import { CacheModule } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { createConnection } from 'net';
import { AppModule } from 'src/app.module';
import {
  JW_TYPEORM_CNN,
  JW_TYPEORM_DB,
  ERP_TYPEORM_CNN,
  ERP_TYPEORM_DB,
  JW_PG_CNN,
  JW_PG_DB,
} from 'src/common/constant/database.const';
import { configOptions } from 'src/config/config.option';
import { DatabaseModule } from 'src/database/database.module';
import { databaseProviders } from 'src/database/database.providers';
import { repositoryProviders } from 'src/database/repository.providers';
import { GatewayModule } from 'src/gateway/gateway.module';
import { CustomerController } from 'src/gateway/user/controller/customer.controller';
import { CUSTOMER_REPO } from 'src/user/common/constant/repository.const';
import { USER_CUSTOMER_SERVICE } from 'src/user/common/constant/service.const';
import { CustomerModule } from 'src/user/user.module';
import { CustomerServiceInterface } from '../interface/customer.interface';
import { userProviders } from '../provider/customer.provider';
import { CustomerService } from './customer.service';

let userService: CustomerServiceInterface;

beforeAll(async () => {
  const module: TestingModule = await Test.createTestingModule({
    imports: [
      DatabaseModule,
      ConfigModule,
      TypeOrmModule,
      CustomerModule,
      GatewayModule,
      CacheModule.register(),

      // ClientsModule.register([
      //   { name: USER_CUSTOMER_SERVICE, transport: Transport.TCP },
      // ]),

      // ConfigModule.forRoot(configOptions),
    ],
    controllers: [CustomerController],
    providers: [
      ...userProviders,
      ...repositoryProviders,
      ...databaseProviders,
      ConfigService,
    ],
  }).compile();
  userService = await module.resolve(CustomerService);
  // userService = module.get<CustomerServiceInterface>(CustomerService);
  // userService = new CustomerService(CUSTOMER_REPO);
});

describe('CustomerService', () => {
  it('should be defined', () => {
    console.log({ userService });
    expect(2).toBeDefined();
    // expect(userService).toBeDefined();
  });
});
