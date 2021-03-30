import {
  Column,
  Model,
  Table,
  AllowNull,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { Transaction } from '../transaction/transaction.model';
import { Account } from '../account/account.model';
import { typeEnum } from './accounttype.enum';

@Table({
  timestamps: true,
  modelName: 'accounttype',
})
export class Accounttype extends Model<Accounttype> {
  @ForeignKey(() => Account)
  @AllowNull(false)
  @Column
  accountId: number;

  @AllowNull(false)
  @Column({ defaultValue: 'Savings' })
  type: typeEnum;

  @AllowNull(false)
  @Column({ defaultValue: 1000 })
  balance: number;

  @BelongsTo(() => Account)
  account: Account;

  @HasMany(() => Transaction, 'senderId')
  sendertransaction: Transaction[];

  @HasMany(() => Transaction, 'recieverId')
  recievertransaction: Transaction[];
}
