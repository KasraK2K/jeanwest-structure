import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Hello } from 'src/hello/common/entity/typeorm/hello.entity.jw';

@Injectable()
export class HelloRepository {
  constructor(@Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Hello>) {}

  createHello(data: Record<string, unknown>): Promise<Hello> {
    return this.baseRepository.create(Hello, data);
  }
}
