import {
  JW_TYPEORM_REPO,
  JW_PG_REPO,
} from 'src/common/constant/database.const';
import { PRODUCT_PG_REPO, PRODUCT_SERVICE, PRODUCT_TYPEORM_REPO } from '../constant/product.const';
import { ProductRepository } from '../repository/product.repository';
import { ProductService } from '../service/product.service';
export const productProviders = [
  {
    provide: PRODUCT_SERVICE,
    useClass: ProductService,
  },
  {
    provide: PRODUCT_TYPEORM_REPO,
    useClass: ProductRepository,
    inject: [JW_TYPEORM_REPO],
  },
  {
    provide: PRODUCT_PG_REPO,
    useClass: ProductRepository,
    inject: [JW_PG_REPO],
  },
];
