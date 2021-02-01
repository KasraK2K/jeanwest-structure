import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Account } from 'src/user/common/entity/typeorm/account.entity.jw';
import { DeleteResult } from 'typeorm';

@Injectable()
export class accountRepository {
  constructor(
    @Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Account>,
  ) {}
  create(data: Record<string, unknown>): Promise<Account> {
    return this.baseRepository.create(Account, data);
  }

  findMany(): Promise<Array<Account>> {
    return this.baseRepository.findMany(Account);
  }

  findById(data: string | number): Promise<Account> {
    return this.baseRepository.findById(Account, data);
  }

  findOne(data: Record<string, unknown>): Promise<Account> {
    return this.baseRepository.findOne(Account, data);
  }

  deleteById(data: string | number): Promise<DeleteResult> {
    return this.baseRepository.deleteById(Account, data);
  }

  save(data: Account): Promise<Account> {
    return this.baseRepository.save(Account, data);
  }
}
