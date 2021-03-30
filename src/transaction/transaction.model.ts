import {
  Column,
  Model,
  Table,
  AllowNull,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Accounttype } from '../accounttype/accounttype.model';

@Table({
  timestamps: true,
  modelName: 'transaction',
})
export class Transaction extends Model<Transaction> {
  @AllowNull(false)
  @Column
  amount: number;

  @ForeignKey(() => Accounttype)
  @AllowNull(false)
  @Column
  senderId: number;

  @ForeignKey(() => Accounttype)
  @AllowNull(false)
  @Column
  recieverId: number;

  @BelongsTo(() => Accounttype, 'senderId')
  sender: Account;

  @BelongsTo(() => Accounttype, 'recieverId')
  reciever: Account;
}
