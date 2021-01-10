import { Entity, Column } from 'typeorm';
import { IsOptional } from 'class-validator';
import { ErpProduct } from './erp/erp.entity';
import { BanimodeProduct } from './banimode/banimode.entity';
import { AbstractEntity } from 'src/section/inventory/common/entity/abstract.entity';

@Entity({ database: 'test' })
export class Product extends AbstractEntity {
  @Column({ default: 0 })
  @IsOptional()
  quantity: number;

  @Column(() => ErpProduct, { prefix: '' })
  erpProduct: ErpProduct;

  @IsOptional()
  @Column(() => BanimodeProduct, { prefix: '' })
  banimodeProduct: BanimodeProduct;
}
