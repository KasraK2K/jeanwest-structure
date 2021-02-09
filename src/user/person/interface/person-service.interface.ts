import { CreatePersonDto, CreatePersonResponseDto } from '../dto/person.dto';

export interface PersonSrevice {
  createPerson(body: CreatePersonDto): Promise<CreatePersonResponseDto>;
}
