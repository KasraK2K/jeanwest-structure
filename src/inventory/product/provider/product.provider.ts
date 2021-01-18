import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { PRODUCT_SERVICE } from 'src/inventory/common/constant/service.const';
import { PRODUCT_REPO } from '../../common/constant/repository.const';
import { ProductRepository } from '../repository/product.repository';
import { ProductService } from '../service/product.service';
export const productProviders = [
  {
    provide: PRODUCT_SERVICE,
    useClass: ProductService,
  },
  {
    provide: PRODUCT_REPO,
    useClass: ProductRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
