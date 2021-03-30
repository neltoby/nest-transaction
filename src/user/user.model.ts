import {
  Column,
  Model,
  Table,
  Length,
  Unique,
  AllowNull,
  HasOne,
} from 'sequelize-typescript';
import { Account } from '../account/account.model';

@Table({
  timestamps: true,
  modelName: 'user',
})
export class User extends Model<User> {
  @Length({ min: 2, max: 50 })
  @AllowNull(false)
  @Column
  firstName: string;

  @Length({ min: 2, max: 50 })
  @AllowNull(false)
  @Column
  lastName: string;

  @Unique
  @AllowNull(false)
  @Column
  email: string;

  @HasOne(() => Account)
  account: Account;
}
