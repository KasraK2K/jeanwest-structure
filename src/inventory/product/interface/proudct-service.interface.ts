import { ErpProductDto } from '../dto/erp/erp.dto';
import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { FilterDto } from '../dto/filter.dto';
import { ProductDto } from '../dto/product.dto';

export interface IProductSrevice {
  findProduct(filter: FilterDto): Promise<ProductDto>;
  createErpProduct(newProductDto: RawErpProductDto): Promise<ProductDto>;
}
