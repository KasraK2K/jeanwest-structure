import { TICKETING_TYPEORM_REPO } from '../../common/constant/repository.const';
import { TicketingRepository } from '../repository/ticketing.repository';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { TicketingService } from './ticketing.service';
import { Test, TestingModule } from '@nestjs/testing';

export class repository {
  create(data: Record<string, unknown>) {
    return {};
  }
  findMany(data: Record<string, unknown>) {
    return [];
  }
  findOne(data: Record<string, unknown>) {
    return {};
  }
}

export const ticketingProviders = [
  {
    provide: TICKETING_TYPEORM_REPO,
    useClass: TicketingRepository,
    inject: [JW_TYPEORM_REPO],
  },
];

describe('ticketing service', () => {
  let tcketingService: TicketingService;
  beforeAll(async () => {});
});
