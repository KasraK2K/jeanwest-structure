import { BadRequestException, Inject, Injectable } from '@nestjs/common';
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
      const mobile = `0${body.mobile.slice(-10)}`;
      const checkMobileInput = this.checkMobile(mobile);
      if (checkMobileInput.length === 0)
        throw new BadRequestException('Invalid phone Number');
      const checkPerson = this.repository.findOne(Person, mobile);
      if (checkPerson.length)
        throw new BadRequestException('Phone Number already exists!');
      return this.repository.create(Person, mobile);
    } catch (err) {
      throw err;
    }
  }

  async getPersons(body: CreatePersonDto): Promise<Array<PersonResponseDto>> {
    try {
      return this.repository.findMany(Person);
    } catch (err) {
      throw err;
    }
  }

  async getPerson(body: CreatePersonDto): Promise<PersonResponseDto> {
    try {
      const mobile = `0${body.mobile.slice(-10)}`;
      const checkMobileInput = this.checkMobile(mobile);
      if (checkMobileInput.length === 0)
        throw new BadRequestException('Invalid phone Number');
      return this.repository.findOne(Person, mobile);
    } catch (err) {
      throw err;
    }
  }

  checkMobile = function (str: string) {
    const mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      junkReg = /[^\d]/gi,
      persinNum = [
        /۰/gi,
        /۱/gi,
        /۲/gi,
        /۳/gi,
        /۴/gi,
        /۵/gi,
        /۶/gi,
        /۷/gi,
        /۸/gi,
        /۹/gi,
      ],
      num2en = function (str) {
        for (let i = 0; i < 10; i++) {
          str = str.replace(persinNum[i], i);
        }
        return str;
      };
    const mobiles = num2en(str + '').match(mobileReg) || [];
    mobiles.forEach(function (value, index, arr) {
      arr[index] = value.replace(junkReg, '');
      arr[index][0] === '0' || (arr[index] = '0' + arr[index]);
    });
    return mobiles;
  };
}
