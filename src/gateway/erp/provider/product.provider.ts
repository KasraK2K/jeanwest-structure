import { ERP_TYPEORM_REPO } from 'src/common/constant/database.const';
import { ERP_PRODUCT_REPO } from 'src/erp/common/constant/repository.const';
import { ERP_PRODUCT_SERVICE } from 'src/erp/common/constant/service.const';
import { ERPRepository } from 'src/erp/common/repository/mainRepo';
import { ErpProductService } from 'src/erp/product/service/product.service';

export const erpProductProviders = [
  {
    provide: ERP_PRODUCT_SERVICE,
    useClass: ErpProductService,
  },
  // {
  //   provide: ERP_PRODUCT_REPO,
  //   useClass: ERPRepository,
  //   inject: [ERP_TYPEORM_REPO],
  // },
];
