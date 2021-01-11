import { IsNumber, IsOptional } from 'class-validator';
import { BANIMODE_INDEX } from 'src/section/inventory/common/constant/database-index.const';
import { Column, Index } from 'typeorm';
import { IBanimodeDetails } from '../../interface/banimode-details.interface';

export class BanimodeProduct {
  @Column({ unique: true, nullable: true })
  @IsNumber()
  @IsOptional()
  BM_productCode: number;

  @Column({ type: 'jsonb', nullable: true })
  @Index(BANIMODE_INDEX, { synchronize: false })
  @IsOptional()
  banimodeDetails: IBanimodeDetails;
}
