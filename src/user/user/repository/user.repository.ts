import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { User } from 'src/user/common/entity/typeorm/user.entity.jw';

@Injectable()
export class UserRepository {
  constructor(@Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<User>) {}
  create(data: Record<string, unknown>): Promise<User> {
    return this.baseRepository.create(User, data);
  }

  findMany(): Promise<Array<User>> {
    return this.baseRepository.findMany(User);
  }

  findOne(data: Record<string, unknown>): Promise<User> {
    return this.baseRepository.findOne(User, data);
  }
}
