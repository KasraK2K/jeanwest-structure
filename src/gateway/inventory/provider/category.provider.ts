import { CategoryService } from 'src/inventory/category/service/category.service';
import { INVENTORY_CATEGORY_SERVICE } from '../common/constant/inventory.const';

export const categoryProviders = [
  {
    provide: INVENTORY_CATEGORY_SERVICE,
    useClass: CategoryService,
  },
];