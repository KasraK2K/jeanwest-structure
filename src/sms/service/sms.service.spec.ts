import { Test, TestingModule } from '@nestjs/testing';
import { SmsService } from './sms.service';
import { SMS_SERVICE, SMS_TYPEORM_REPO } from '../common/const/sms.const';
import { SmsRepository } from '../repository/sms.repository';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/common';
import { DatabaseModule } from '../../../src/database/database.module';
import Axios from 'axios';
// import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';

export class repository {
  create(data: Record<string, unknown>) {
    return {};
  }
  findOne(data: Record<string, unknown>) {
    return {};
  }
}

export const smsProviders = [
  {
    provide: SMS_TYPEORM_REPO,
    useClass: SmsRepository,
    inject: ['JEANSWEST_TYPEORM_REPOSITORY'],
  },
];

describe('Sms service', () => {
  let smsService: SmsService;
  beforeAll(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: 'AXIOS_INSTANCE_TOKEN',
          useValue: Axios,
        },
        HttpService,
        {
          provide: SMS_SERVICE,
          useClass: SmsService,
        },
        ConfigService,
      ],
    }).compile();
    smsService = moduleRef.get('SMS_SERVICE');
  });

  it('should be defined', () => {
    console.log('>>>>> smsService', smsService);
    expect(smsService).toBeDefined();
  });
});
