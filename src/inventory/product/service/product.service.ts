import { Inject, Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PRODUCT_TYPEORM_REPO } from '../constant/product.const';
import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { FilterDto } from '../dto/filter.dto';
import { ProductDto } from '../dto/product.dto';
import { erpProductTransformer } from '../interceptor/erp-product.transformer';
import { IProductSrevice } from '../interface/proudct-service.interface';

@Injectable()
export class ProductService implements IProductSrevice {
  constructor(
    @Inject(PRODUCT_TYPEORM_REPO)
    private readonly repository,
  ) {}

  public async createErpProduct(
    newProduct: RawErpProductDto,
  ): Promise<ProductDto> {
    const cleanData = erpProductTransformer([newProduct]);
    const result = await this.repository.create(cleanData[0]);
    return plainToClass(ProductDto, result);
  }

  public async findProduct(filter: FilterDto): Promise<ProductDto> {
    const result = await this.repository.findOne(filter);
    return plainToClass(ProductDto, result);
  }
}
