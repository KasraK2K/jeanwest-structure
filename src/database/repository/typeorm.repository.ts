import { Injectable } from '@nestjs/common';
import { IRepo } from '../../common/interface/repository.interface';
import { EntityManager, EntityRepository } from 'typeorm';

@Injectable()
@EntityRepository()
export class TypeormRepository implements IRepo {
  constructor(private manager: EntityManager) {}
  create(schema: any, data: Record<string, unknown>): any {
    const ref_schema = new schema();
    Object.assign(ref_schema, data);
    return this.manager.save(ref_schema);
  }
  findOne(schema: any, data: Record<string, unknown>): any {
    return this.manager.findOne(schema, data);
  }
  runQuery(query: string): Promise<Array<Record<string, unknown>>> {
    return this.manager.query(query);
  }
}
