import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { PRODUCT_SERVICE } from 'src/section/inventory/common/constant/service.const';
import { RawErpProductDto } from '../dto/erp/raw-erp.dto';
import { FilterDto } from '../dto/filter.dto';
import { ProductDto } from '../dto/product.dto';
import { IProductSrevice } from '../interface/proudct-service.interface';

/**
 * inventory module > product controller
 *
 * product of inventory has 3 main part :
 *     1-ERP data
 *     2-BANIMODE data
 *     3-Own data
 *
 * create new product has two steps:
 *     1-get ERP data and create new Product
 *     2-get Banimode data by barcode and update product
 *
 * base route : /product
 *
 * product controller has two methods:
 *     1-read: GET single product details by barcode
 *     2-erp-single POST and create new product by POST ERP single product
 *
 * methods:
 *     1-GET > read(data: FilterDto)
 *     2-POST > erp-single(data: RawErpProductDto)
 */
@Controller('product')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE)
    private readonly productService: IProductSrevice,
  ) {}

  @Get('read')
  public async readSingle(@Body() data: FilterDto): Promise<any> {
    return await this.productService.findProduct(data);
  }

  @Post('erp-single')
  public async createOneByErp(
    @Body() data: RawErpProductDto,
  ): Promise<ProductDto> {
    return await this.productService.createErpProduct(data);
  }
}
