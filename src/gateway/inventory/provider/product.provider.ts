import { ProductService } from 'src/inventory/product/service/product.service';
import { INVENTORY_PRODUCT_SERVICE } from '../common/constant/inventory.const';

export const productProviders = [
  {
    provide: INVENTORY_PRODUCT_SERVICE,
    useClass: ProductService,
  },
];
