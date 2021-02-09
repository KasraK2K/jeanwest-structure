import { Body, Controller, Get, Inject, Post } from '@nestjs/common';

import { PERSON_PERSON_SERVICE } from 'src/user/common/constant/service.const';

import { PersonService } from '../service/person.service';

import { CreatePersonDto, PersonResponseDto } from '../dto/person.dto';

@Controller('person')
export class PersonController {
  constructor(
    @Inject(PERSON_PERSON_SERVICE)
    private readonly personService: PersonService,
  ) {}

  @Post('createPerson')
  async createPerson(@Body() body: CreatePersonDto): Promise<CreatePersonDto> {
    try {
      return this.personService.getPerson(body);
    } catch (err) {
      return err;
    }
  }

  @Get('persons')
  async getPersons(
    @Body() body: CreatePersonDto,
  ): Promise<Array<PersonResponseDto>> {
    try {
      return this.personService.getPersons(body);
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
