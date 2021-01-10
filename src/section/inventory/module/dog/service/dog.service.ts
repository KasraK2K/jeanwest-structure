import { Inject, Injectable } from '@nestjs/common';
import { DOG_REPO } from 'src/section/inventory/common/constant/repository.const';
import { DogDto } from '../dto/dog.dto';
import { IDogSrevice } from '../interface/dog-service.interface';

@Injectable()
export class DogService implements IDogSrevice {
  constructor(
    @Inject(DOG_REPO)
    private readonly repository,
  ) {}

  public async createDog(dogDto: DogDto): Promise<any> {
    return this.repository.create(dogDto);
  }
}
