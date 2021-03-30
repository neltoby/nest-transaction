import {
  Column,
  Model,
  Table,
  Unique,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { User } from '../user/user.model';
import { Accounttype } from '../accounttype/accounttype.model';

@Table({
  modelName: 'account',
})
export class Account extends Model<Account> {
  @AllowNull(false)
  @Unique
  @Column
  account: string;

  @ForeignKey(() => User)
  @AllowNull(false)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @HasMany(() => Accounttype)
  accounttype: Accounttype[];
}
