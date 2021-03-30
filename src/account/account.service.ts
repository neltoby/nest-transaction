import { Injectable, Inject } from '@nestjs/common';
import { Account } from './account.model';
import { CreateAccountService } from './create-account.service';
// import { AccountDto } from './account.dto';
// import { Iaccount } from './account.interface';

@Injectable()
export class AccountService {
  constructor(
    @Inject(Account)
    private acctModel: typeof Account,
    private createAcct: CreateAccountService,
  ) {}

  async create(account: any): Promise<Account> {
    return this.acctModel.create<Account>(account);
  }

  async findByAcct(num: string): Promise<Account> {
    return this.acctModel.findOne({
      where: {
        account: num,
      },
      include: 'accounttype',
    });
  }

  async findOne(id: number): Promise<Account> {
    return this.acctModel.findOne({
      where: {
        id,
      },
    });
  }

  async delete(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }

  async generateAcct(): Promise<string> {
    let acct = this.createAcct.createAccount();
    let check: boolean = await this.acctPresent(acct);
    while (check === true) {
      acct = this.createAcct.createAccount();
      check = await this.acctPresent(acct);
    }
    return acct;
  }

  async acctPresent(account: string): Promise<boolean> {
    const acct = this.findByAcct(account);
    if (acct) return true;
    return false;
  }
}
