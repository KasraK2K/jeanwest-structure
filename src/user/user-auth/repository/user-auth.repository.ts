import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { UserAuth } from 'src/user/common/entity/typeorm/user-auth.entity.jw';
import { DeleteResult } from 'typeorm';

@Injectable()
export class accountRepository {
  constructor(
    @Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<UserAuth>,
  ) {}
  create(data: Record<string, unknown>): Promise<UserAuth> {
    return this.baseRepository.create(UserAuth, data);
  }

  findMany(): Promise<Array<UserAuth>> {
    return this.baseRepository.findMany(UserAuth);
  }

  findById(data: string | number): Promise<UserAuth> {
    return this.baseRepository.findById(UserAuth, data);
  }

  findOne(data: Record<string, unknown>): Promise<UserAuth> {
    return this.baseRepository.findOne(UserAuth, data);
  }

  deleteById(data: string | number): Promise<DeleteResult> {
    return this.baseRepository.deleteById(UserAuth, data);
  }

  save(data: UserAuth): Promise<UserAuth> {
    return this.baseRepository.save(UserAuth, data);
  }
}
