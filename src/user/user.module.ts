import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from './user.model';
import { UserService } from './user.service';
import { usersProviders } from './users.providers';
// import { CreateAccountService } from './create-account.service';

@Module({
  imports: [SequelizeModule.forFeature([User])],
  exports: [SequelizeModule],
  providers: [UserService, ...usersProviders],
})
export class UserModule {}
