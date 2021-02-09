import { AuthenticateDto, AuthenticateResponseDto } from '../dto/account.dto';

export interface IAccountSrevice {
  authentication(body: AuthenticateDto): Promise<AuthenticateResponseDto>;
}
