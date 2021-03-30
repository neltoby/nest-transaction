import { Injectable, Inject } from '@nestjs/common';
import { User } from './user.model';
import { AccountService } from '../account/account.service';
// import { CreateUserDto } from './create-user.dto';
import { Iaccount } from '../account/account.interface';
import { USER_REPOSITORY, SEQUELIZE } from '../core/constants';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_REPOSITORY) private readonly userModel: typeof User,
    @Inject(SEQUELIZE) private readonly sequelize,
    private acctService: AccountService,
  ) {}

  async create(user: any): Promise<User> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };
        const user_created = await this.userModel.create<User>(
          user,
          transactionHost,
        );
        const { id } = user_created;
        const account: string = await this.acctService.generateAcct();
        const acct: Iaccount = { account, userId: id };
        const acct_created = await this.acctService.create(acct);
        return await this.findOne(id);
      });
    } catch (e) {}
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.findAll({
      include: 'account',
    });
  }

  async findOne(id: number): Promise<User> {
    return await this.userModel.findOne({
      where: {
        id,
      },
      include: 'account',
    });
  }

  async deleteOne(id: number): Promise<void> {
    const user = await this.findOne(id);
    await user.destroy();
  }
}
