import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { FilterDto } from '../dto/filter.dto';
import { IProduct } from './product.interface';

export interface IProductSrevice {
  findProduct(filter: FilterDto): Promise<IProduct>;
  createErpProduct(newProductDto: RawErpProductDto): Promise<IProduct>;
}
