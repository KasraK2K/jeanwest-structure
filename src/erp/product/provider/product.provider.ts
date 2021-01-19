import { ERP_TYPEORM_REPO } from 'src/common/constant/database.const';
import { ERP_PRODUCT_SERVICE } from 'src/erp/common/constant/service.const';
import { ERP_PRODUCT_REPO } from '../../common/constant/repository.const';
import { ERPRepository } from '../../common/repository/mainRepo';
import { ERP_ProductService } from '../service/product.service';
export const erpProductProviders = [
  {
    provide: ERP_PRODUCT_SERVICE,
    useClass: ERP_ProductService,
  },
  {
    provide: ERP_PRODUCT_REPO,
    useClass: ERPRepository,
    inject: [ERP_TYPEORM_REPO],
  },
];
