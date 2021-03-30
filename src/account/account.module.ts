import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Account } from './account.model';
import { AccountService } from './account.service';
import { CreateAccountService } from './create-account.service';
import { accountProviders } from './accounts.providers';

@Module({
  imports: [SequelizeModule.forFeature([Account])],
  exports: [AccountService, CreateAccountService],
  providers: [AccountService, CreateAccountService, ...accountProviders],
})
export class AccountModule {}
