import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Accounttype } from './accounttype.model';
import { AccounttypeService } from './accounttype.service';
import { accounttypesProviders } from './accounttypes.providers';

@Module({
  imports: [SequelizeModule.forFeature([Accounttype])],
  providers: [AccounttypeService, ...accounttypesProviders],
})
export class AccounttypeModule {}
