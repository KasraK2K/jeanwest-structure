import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { PERSON_REPO } from 'src/user/common/constant/repository.const';
import { Person } from 'src/user/common/entity/typeorm/person.entity.jw';
import {
  CreatePersonDto,
  CreatePersonResponseDto,
  GetMyPersonDto,
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
        throw new ForbiddenException('You are not logged in!');

      body.accountId = body.userAccountId;

      //? Check duplicate Person with account
      const checkPerson = await this.getPersonByAccountId({
        id: body.accountId,
      });
      if (checkPerson) {
        console.error('This account has already a person registered to it');
        return null;
      }
      return this.repository.create(body);
    } catch (err) {
      throw err;
    }
  }

  async getMyPerson(body: GetMyPersonDto): Promise<PersonResponseDto> {
    try {
      if (!body.userAccountId)
        throw new ForbiddenException('You are not logged in!');
      return this.getPersonByAccountId({ id: body.userAccountId });
    } catch (err) {
      throw err;
    }
  }

  async getPersons(): Promise<Array<PersonResponseDto>> {
    try {
      return this.repository.findMany();
    } catch (err) {
      throw err;
    }
  }

  async getPersonByAccountId(body: { id: string }): Promise<PersonResponseDto> {
    try {
      return this.repository.findOne({ where: { accountId: body.id } });
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
