import { DeleteResult } from 'typeorm';
import { LoginDto, LoginResponseDto } from '../dto/account.dto';

export interface IAccountSrevice {
  authentication(body: LoginDto): Promise<LoginResponseDto>;
}
