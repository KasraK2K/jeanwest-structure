import { DogDto } from '../dto/dog.dto';

export interface IDogSrevice {
  createDog(dogDto: DogDto): Promise<DogDto>;
}
