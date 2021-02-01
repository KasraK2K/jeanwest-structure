import { DeleteResult } from 'typeorm';
import { LoginDto, LoginResponseDto } from '../dto/account.dto';

export interface AccountSrevice {
  login(body: LoginDto): Promise<LoginResponseDto>;
}
