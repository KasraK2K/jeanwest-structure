import {
  CreateDateColumn,
  Timestamp,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

/** @class Datetime representing timestamp part of model. */
export class Datetime {
  @CreateDateColumn({ name: 'created_at' })
  created_at: Timestamp;

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Timestamp;

  @DeleteDateColumn({ name: 'deleted_at' })
  deleted_at: Timestamp;
}
