import { JW_TYPEORM_REPO } from 'src/common/constant/database.const';
import { PERSON_PERSON_SERVICE } from 'src/user/common/constant/service.const';
import { PERSON_REPO } from '../../common/constant/repository.const';
import { PersonRepository } from '../repository/person.repository';
import { PersonService } from '../service/person.service';

export const personProviders = [
  {
    provide: PERSON_PERSON_SERVICE,
    useClass: PersonService,
  },
  {
    provide: PERSON_REPO,
    useClass: PersonRepository,
    inject: [JW_TYPEORM_REPO],
  },
];
