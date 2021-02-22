import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { USER_REPO } from 'src/user/common/constant/repository.const';
import { User } from 'src/user/common/entity/typeorm/user.entity.jw';
import {
  CreateUserDto,
  CreateUserResponseDto,
  GetMyUserDto,
  UserResponseDto,
} from '../dto/user.dto';
import { UserSrevice } from '../interface/user-service.interface';

@Injectable()
export class UserService implements UserSrevice {
  constructor(
    @Inject(USER_REPO)
    private readonly repository,
  ) {}

  async createUser(body: CreateUserDto): Promise<CreateUserResponseDto> {
    try {
      if (!body.userAccountId)
        throw new ForbiddenException('You are not logged in!');

      body.userAuthId = body.userAccountId;

      //? Check duplicate User with userAuth
      const checkUser = await this.getUserByAccountId({
        id: body.userAuthId,
      });
      if (checkUser) {
        console.error('This userAuth has already a user registered to it');
        return null;
      }
      return this.repository.create(body);
    } catch (err) {
      throw err;
    }
  }

  async getMyUser(body: GetMyUserDto): Promise<UserResponseDto> {
    try {
      if (!body.userAccountId)
        throw new ForbiddenException('You are not logged in!');
      return this.getUserByAccountId({ id: body.userAccountId });
    } catch (err) {
      throw err;
    }
  }

  async getUsers(): Promise<Array<UserResponseDto>> {
    try {
      return this.repository.findMany();
    } catch (err) {
      throw err;
    }
  }

  async getUserByAccountId(body: { id: string }): Promise<UserResponseDto> {
    try {
      return this.repository.findOne({ where: { userAuthId: body.id } });
    } catch (err) {
      throw err;
    }
  }

  async getUser(body: { id: string }): Promise<UserResponseDto> {
    try {
      return this.repository.findOne(User, body.id);
    } catch (err) {
      throw err;
    }
  }
}
