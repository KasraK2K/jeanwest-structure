import { AuthenticateDto, AuthenticateResponseDto } from '../dto/user-auth.dto';

export interface IUserAuthSrevice {
  authentication(body: AuthenticateDto): Promise<AuthenticateResponseDto>;
}
