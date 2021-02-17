import { Inject, Injectable } from '@nestjs/common';
import { PERSON_REPO } from 'src/user/common/constant/repository.const';
import { Person } from 'src/user/common/entity/typeorm/person.entity.jw';
import {
  CreatePersonDto,
  CreatePersonResponseDto,
  PersonResponseDto,
} from '../dto/person.dto';
import { PersonSrevice } from '../interface/person-service.interface';

@Injectable()
export class PersonService implements PersonSrevice {
  constructor(
    @Inject(PERSON_REPO)
    private readonly repository,
  ) {}

  async createPerson(body: CreatePersonDto): Promise<CreatePersonResponseDto> {
    try {
      if (!body.userAccountId)
        body.userAccountId = '05bd2880-3604-471b-bff6-8eb11bb75d7f';

      body.accountId = body.userAccountId;

      //? Check duplicate Person with account
      const checkPerson = await this.getPersonByAccountId(body.accountId);
      if (checkPerson) {
        console.error('This account has already a person registered to it');
        return null;
      }
      return this.repository.create(body);
    } catch (err) {
      throw err;
    }
  }

  async getPersons(): Promise<Array<PersonResponseDto>> {
    try {
      return this.repository.findMany(Person);
    } catch (err) {
      throw err;
    }
  }

  async getPersonByAccountId(body: string): Promise<PersonResponseDto> {
    try {
      return this.repository.findOne({ where: { accountId: body } });
    } catch (err) {
      throw err;
    }
  }

  async getPerson(body: { id: string }): Promise<PersonResponseDto> {
    try {
      return this.repository.findOne(Person, body.id);
    } catch (err) {
      throw err;
    }
  }
}
