import { authenticateDto, authenticateResponseDto } from '../dto/account.dto';

export interface AccountSrevice {
  authenticate(body: authenticateDto): Promise<authenticateResponseDto>;
}
