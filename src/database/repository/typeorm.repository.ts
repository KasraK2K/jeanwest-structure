import { Injectable } from '@nestjs/common';
import { IRepo } from '../../common/interface/repository.interface';
import { EntityManager, EntityRepository } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Injectable()
@EntityRepository()
export class TypeormRepository<T> implements IRepo<T> {
  constructor(private manager: EntityManager) {}

  async create(model: new () => T, data: Record<string, unknown>): Promise<T> {
    const baseModel: T = new model();
    Object.assign(baseModel, data);
    const result = await this.manager.save(baseModel);
    return plainToClass(model, result);
  }

  async findOne(model: new () => T, data: Record<string, unknown>): Promise<T> {
    const result = await this.manager.findOne(model, data);
    return plainToClass(model, result);
  }
}
