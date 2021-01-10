import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PRODUCT_REPO } from 'src/section/inventory/common/constant/repository.const';
import { ErpProductDto } from '../dto/erp/erp.dto';
import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { ProductDto } from '../dto/product.dto';
import { erpProductTransformer } from '../interceptor/erp-product.transformer';
import { IProductSrevice } from '../interface/proudct-service.interface';

@Injectable()
export class ProductService implements IProductSrevice {
  constructor(
    @Inject(PRODUCT_REPO)
    private readonly repository,
  ) {}

  public async createErpProduct(
    newProduct: RawErpProductDto,
  ): Promise<ProductDto> {
    const cleanData = erpProductTransformer([newProduct]);
    const result = await this.repository.create(cleanData[0]);
    return plainToClass(ProductDto, result);
  }
}
