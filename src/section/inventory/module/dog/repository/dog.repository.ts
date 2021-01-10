import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Dog } from '../entity/dog.entity';

@Injectable()
export class DogRepository {
  constructor(@Inject(JW_TYPEORM_REPO) private baseRepository: IRepo) {}
  create(data: Record<string, unknown>) {
    return this.baseRepository.create(Dog, data);
  }
  findOne(data: Record<string, unknown>) {
    return this.baseRepository.findOne(Dog, data);
  }
}
