import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { USER_PERSON_SERVICE } from 'src/user/common/constant/service.const';

import { PersonService } from '../../../user/person/service/person.service';

import {
  CreatePersonDto,
  PersonResponseDto,
} from '../../../user/person/dto/person.dto';

@Controller('person')
export class PersonController {
  constructor(
    @Inject(USER_PERSON_SERVICE)
    private readonly personService: PersonService,
  ) {}

  // @UseGuards(AuthGuard)
  @Post('createPerson')
  async createPerson(@Body() body: CreatePersonDto): Promise<CreatePersonDto> {
    try {
      return this.personService.createPerson(body);
    } catch (err) {
      return err;
    }
  }

  @Get('persons')
  async getPersons(
    @Body() body: CreatePersonDto,
  ): Promise<Array<PersonResponseDto>> {
    try {
      return this.personService.getPersons();
    } catch (err) {
      return err;
    }
  }

  @Post('person')
  async getPerson(@Body() body: CreatePersonDto): Promise<PersonResponseDto> {
    try {
      return this.personService.createPerson(body);
    } catch (err) {
      return err;
    }
  }
}
