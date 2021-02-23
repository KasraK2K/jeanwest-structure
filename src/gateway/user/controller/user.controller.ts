import { Body, Controller, Get, Inject, Post, UseGuards } from '@nestjs/common';

import { USER_USER_SERVICE } from 'src/user/common/constant/service.const';

import { UserService } from '../../../user/user/service/user.service';

import {
  CreateUserDto,
  GetMyUserDto,
  UserResponseDto,
} from '../../../user/user/dto/user.dto';
import { AuthGuard } from 'src/gateway/common/guard/auth.guard';

@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_USER_SERVICE)
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard)
  @Post('createUser')
  async createUser(@Body() body: CreateUserDto): Promise<CreateUserDto> {
    try {
      return this.userService.createUser(body);
    } catch (err) {
      return err;
    }
  }

  @UseGuards(AuthGuard)
  @Get('myUser')
  async getMyUser(@Body() body: GetMyUserDto): Promise<UserResponseDto> {
    try {
      return this.userService.getMyUser(body);
    } catch (err) {
      return err;
    }
  }

  //? Development purposes
  @Get('users')
  async getUsers(
    @Body() body: Record<string, never>,
  ): Promise<Array<UserResponseDto>> {
    try {
      return this.userService.getUsers();
    } catch (err) {
      return err;
    }
  }

  //? Development purposes
  @Post('user')
  async getUser(@Body() body: CreateUserDto): Promise<UserResponseDto> {
    try {
      return this.userService.createUser(body);
    } catch (err) {
      return err;
    }
  }
}
