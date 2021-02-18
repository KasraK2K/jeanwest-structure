import { Inject, Injectable } from '@nestjs/common';
import { IPaginationOption } from 'src/common/interface/pagination-option.interface';
import { IPaginate } from 'src/common/interface/pagination.interface';
import { PRODUCT_TYPEORM_REPO } from '../constant/product.const';
import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { FilterDto } from '../dto/filter.dto';
import { erpProductTransformer } from '../interceptor/erp-product.transformer';
import { IFilter } from '../interface/product-filter.interface';
import { IProduct } from '../interface/product.interface';
import { IProductSrevice } from '../interface/proudct-service.interface';

@Injectable()
export class ProductService implements IProductSrevice {
  constructor(
    @Inject(PRODUCT_TYPEORM_REPO)
    private readonly repository,
  ) {}

  public async createErpProduct(
    newProduct: RawErpProductDto,
  ): Promise<IProduct> {
    const cleanData = erpProductTransformer([newProduct]);
    const result: IProduct = await this.repository.create(cleanData[0]);
    return result;
  }

  public async findProduct(filter: FilterDto): Promise<IProduct> {
    const result: IProduct = await this.repository.findOne(filter);
    return result;
  }

  public async paginateProducts(
    data: IFilter,
    option: IPaginationOption,
  ): Promise<IPaginate<IProduct>> {
    const respond: IPaginate<IProduct>  = await this.repository.paginate(data, option);
    return respond;
  }
}
