import { Injectable } from '@nestjs/common';
import { IRepo } from '../../common/interface/repository.interface';
import { DeleteResult, EntityManager, EntityRepository } from 'typeorm';
import { plainToClass } from 'class-transformer';
import { IPaginationOption } from 'src/common/interface/pagination-option.interface';
import { IPaginate } from 'src/common/interface/pagination.interface';
import { Pagination } from '../pagination/typeorm.pagination';

@Injectable()
@EntityRepository()
export class TypeormRepository<T> implements IRepo<T> {
  constructor(private manager: EntityManager) {}

  async save(model: new () => T, data: T): Promise<T> {
    return this.manager.save(data);
  }

  async create(model: new () => T, data: Record<string, unknown>): Promise<T> {
    const baseModel: T = new model();
    Object.assign(baseModel, data);
    const result = await this.manager.save(baseModel);
    return plainToClass(model, result);
  }

  async findMany(
    model: new () => T,
    data?: Record<string, unknown>,
  ): Promise<Array<T>> {
    const result = await this.manager.find(model, data);
    return plainToClass(model, result);
  }

  async findOne(model: new () => T, data: Record<string, unknown>): Promise<T> {
    const result = await this.manager.findOne(model, data);
    return plainToClass(model, result);
  }

  async findById(model: new () => T, data: string | number): Promise<T> {
    return this.manager.findOne(model, { where: { id: data } });
  }

  async deleteById(
    model: new () => T,
    data: string | number,
  ): Promise<DeleteResult> {
    return this.manager.delete(model, data);
  }

  runQuery(query: string): Promise<Array<Record<string, unknown>>> {
    return this.manager.query(query);
  }
}
