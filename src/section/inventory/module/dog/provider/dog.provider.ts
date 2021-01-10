import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { DOG_SERVICE } from 'src/section/inventory/common/constant/service.const';
import { DOG_REPO } from '../../../common/constant/repository.const';
import { DogRepository } from '../repository/dog.repository';
import { DogService } from '../service/dog.service';
export const dogProviders = [
  {
    provide: DOG_SERVICE,
    useClass: DogService,
  },
  {
    provide: DOG_REPO,
    useClass: DogRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
