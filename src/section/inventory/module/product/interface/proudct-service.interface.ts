import { ErpProductDto } from '../dto/erp/erp.dto';
import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { ProductDto } from '../dto/product.dto';

export interface IProductSrevice {
  createErpProduct(newProductDto: RawErpProductDto): Promise<ProductDto>;
}
