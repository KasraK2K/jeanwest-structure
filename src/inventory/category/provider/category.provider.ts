import { CategoryService } from "../service/category.service";
import { CategoryRepository } from "../repository/category.repository";
import { CATEGORY_SERVICE, CATEGORY_TYPEORM_REPO } from "../constant/category.const";
import { JW_PG_REPO, JW_TYPEORM_REPO } from "src/common/constant/database.const";
import { PRODUCT_PG_REPO } from "src/inventory/product/constant/product.const";

export const categoryProviders = [
  {
    provide: CATEGORY_SERVICE,
    useClass: CategoryService,
  },
  {
    provide: CATEGORY_TYPEORM_REPO,
    useClass: CategoryRepository,
    inject: [JW_TYPEORM_REPO],
  },
  {
    provide: PRODUCT_PG_REPO,
    useClass: CategoryRepository,
    inject: [JW_PG_REPO],
  },
];
