import { Injectable } from '@nestjs/common';
import { EntityRepository, Repository, EntityManager } from 'typeorm';

@Injectable()
@EntityRepository()
export class MainRepository {
  constructor(private manager: EntityManager, schema: any) {
    this.schema = schema;
  }
  private schema: any = {};
  createAndSave(data: Record<string, unknown>) {
    const ref_schema = new this.schema();
    ref_schema.data = data;
    return this.manager.save(ref_schema);
  }
}
