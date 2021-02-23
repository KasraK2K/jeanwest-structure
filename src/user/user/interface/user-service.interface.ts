import { CreateUserDto, CreateUserResponseDto } from '../dto/user.dto';

export interface UserSrevice {
  createUser(body: CreateUserDto): Promise<CreateUserResponseDto>;
}
