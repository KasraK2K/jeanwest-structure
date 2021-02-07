import { Inject, Injectable } from '@nestjs/common';
import { Branch } from 'src/branch/common/entity/typeorm/branch.entity.jw';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';

@Injectable()
export class branchRepository {
  constructor(@Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Branch>) {}
  create(data: Record<string, unknown>): Promise<Branch> {
    return this.baseRepository.create(Branch, data);
  }

  findMany(): Promise<Array<Branch>> {
    return this.baseRepository.findMany(Branch);
  }

  findById(data: string | number): Promise<Branch> {
    return this.baseRepository.findById(Branch, data);
  }

  findOne(data: Record<string, unknown>): Promise<Branch> {
    return this.baseRepository.findOne(Branch, data);
  }

  save(data: Branch): Promise<Branch> {
    return this.baseRepository.save(Branch, data);
  }
}
