import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Person } from 'src/user/common/entity/typeorm/person.entity.jw';

@Injectable()
export class PersonRepository {
  constructor(@Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Person>) {}
  create(data: Record<string, unknown>): Promise<Person> {
    return this.baseRepository.create(Person, data);
  }

  findMany(): Promise<Array<Person>> {
    return this.baseRepository.findMany(Person);
  }

  findOne(data: Record<string, unknown>): Promise<Person> {
    return this.baseRepository.findOne(Person, data);
  }
}
