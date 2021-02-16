import { ICategory } from './category.interface';

export interface ICategorySrevice {
  list(): Promise<ICategory>;
}
