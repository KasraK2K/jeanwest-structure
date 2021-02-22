import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';

import { USER_PERSON_SERVICE } from 'src/user/common/constant/service.const';

import { PersonService } from '../../../user/person/service/person.service';

import {
  CreatePersonDto,
  GetMyPersonDto,
  PersonResponseDto,
} from '../../../user/person/dto/person.dto';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';

@Controller('person')
export class PersonController {
  constructor(
    @Inject(USER_PERSON_SERVICE)
    private readonly personService: PersonService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('createPerson')
  async createPerson(@Body() body: CreatePersonDto): Promise<CreatePersonDto> {
    try {
      return this.personService.createPerson(body);
    } catch (err) {
      return err;
    }
  }

  @UseGuards(AuthGuard)
  @Get('myPerson')
  async getMyPerson(@Body() body: GetMyPersonDto): Promise<PersonResponseDto> {
    try {
      return this.personService.getMyPerson(body);
    } catch (err) {
      return err;
    }
  }

  //? Development purposes
  @Get('persons')
  async getPersons(
    @Body() body: Record<string, never>,
  ): Promise<Array<PersonResponseDto>> {
    try {
      return this.personService.getPersons();
    } catch (err) {
      return err;
    }
  }

  //? Development purposes
  @Post('person')
  async getPerson(@Body() body: CreatePersonDto): Promise<PersonResponseDto> {
    try {
      return this.personService.createPerson(body);
    } catch (err) {
      return err;
    }
  }
}
