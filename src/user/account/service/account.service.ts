import { BadRequestException, CACHE_MANAGER } from '@nestjs/common';
import { Inject, Injectable } from '@nestjs/common';
import { ACCOUNT_REPO } from 'src/user/common/constant/repository.const';
import { Account, LoginDto, LoginResponseDto } from '../dto/account.dto';
import { IAccountSrevice } from '../interface/address-service.interface';
import { sign } from 'jsonwebtoken';
import { Cache } from 'cache-manager';

@Injectable()
export class AccountService implements IAccountSrevice {
  constructor(
    @Inject(ACCOUNT_REPO)
    private readonly repository,
    @Inject(CACHE_MANAGER) private cache: Cache,
  ) {}

  async getAccounts(): Promise<Account[]> {
    try {
      return this.repository.findMany();
    } catch (err) {
      throw err;
    }
  }

  async getAccountById(body: { id: string | number }): Promise<Account> {
    try {
      const account = await this.repository.findById(body.id);
      console.log({ 'In service': account });
      return account;
    } catch (err) {
      throw err;
    }
  }

  async getAccountByMobile(body: LoginDto): Promise<Account> {
    try {
      const account = await this.repository.findOne({ mobile: body.mobile });
      return account;
    } catch (err) {
      throw err;
    }
  }

  async createAccount(body: LoginDto): Promise<Account> {
    try {
      return this.repository.create({ mobile: body.mobile });
    } catch (err) {
      throw err;
    }
  }

  async authentication(body: LoginDto): Promise<LoginResponseDto> {
    try {
      const mobile = `0${body.mobile.slice(-10)}`;
      const checkMobileInput = this.checkMobile(mobile);
      if (checkMobileInput.length === 0)
        throw new BadRequestException('Invalid phone Number');
      const currectPin: string = await this.cache.get(checkMobileInput[0]);
      if (currectPin === body.pin) {
        let account = await this.getAccountByMobile(body);
        if (!account) account = await this.createAccount(body);
        const token = sign({ id: account.id }, process.env.TOKEN_SECRET);
        await this.cache.set(checkMobileInput[0], token, { ttl: 86400 });
        return { account, token };
      }
    } catch (err) {
      throw err;
    }
  }

  checkMobile = function (str: string) {
    const mobileReg = /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/gi,
      junkReg = /[^\d]/gi,
      persinNum = [
        /۰/gi,
        /۱/gi,
        /۲/gi,
        /۳/gi,
        /۴/gi,
        /۵/gi,
        /۶/gi,
        /۷/gi,
        /۸/gi,
        /۹/gi,
      ],
      num2en = function (str) {
        for (let i = 0; i < 10; i++) {
          str = str.replace(persinNum[i], i);
        }
        return str;
      };
    const mobiles = num2en(str + '').match(mobileReg) || [];
    mobiles.forEach(function (value, index, arr) {
      arr[index] = value.replace(junkReg, '');
      arr[index][0] === '0' || (arr[index] = '0' + arr[index]);
    });
    return mobiles;
  };
}
