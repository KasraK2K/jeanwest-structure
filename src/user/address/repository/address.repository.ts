import { Inject, Injectable } from '@nestjs/common';
import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { IRepo } from 'src/common/interface/repository.interface';
import { Address } from 'src/user/common/entity/typeorm/address.entity.jw';
import { DeleteResult } from 'typeorm';

@Injectable()
export class addressRepository {
  constructor(
    @Inject(JW_TYPEORM_REPO) private baseRepository: IRepo<Address>,
  ) {}
  create(data: Record<string, unknown>): Promise<Address> {
    return this.baseRepository.create(Address, data);
  }

  findMany(data?: Record<string, unknown>): Promise<Array<Address>> {
    return this.baseRepository.findMany(Address, data);
  }

  findById(data: string | number): Promise<Address> {
    return this.baseRepository.findById(Address, data);
  }

  findOne(data: Record<string, unknown>): Promise<Address> {
    return this.baseRepository.findOne(Address, data);
  }

  deleteById(data: string | number): Promise<DeleteResult> {
    return this.baseRepository.deleteById(Address, data);
  }

  save(data: Address): Promise<Address> {
    return this.baseRepository.save(Address, data);
  }
}
