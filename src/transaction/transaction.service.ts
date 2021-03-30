import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';

import { Transaction } from './transaction.model';
import { TRANSACTION_REPOSITORY, SEQUELIZE } from '../core/constants';
import { typeEnum } from '../accounttype/accounttype.enum';
import { TransactionDto } from './transaction.dto';

type sender = number | string;

interface Itransaction {
  amount: number;
  senderId: sender;
  recieverId: string;
  accttype?: typeEnum;
}

@Injectable()
export class TransactionService {
  constructor(
    @Inject(TRANSACTION_REPOSITORY)
    private readonly transModel: typeof Transaction,
    @Inject(SEQUELIZE) private readonly sequelize,
  ) {}

  async create(data: Itransaction): Promise<Transaction> {
    try {
      return await this.sequelize.transaction(async (t) => {
        const transactionHost = { transaction: t };
        const { senderId, accttype } = data;
        if (typeof senderId === 'string') {
          if (accttype) {
            this.
          }
        }
        return await this.transModel.create<Transaction>();
      });
    } catch (e) {}
  }

  async findOneByTransId(id: number): Promise<Transaction> {
    return await this.transModel.findOne({
      where: {
        id,
      },
    });
  }

  async findAllTransBySenderId(senderId: number): Promise<Transaction[]> {
    return await this.transModel.findAll({
      where: {
        senderId,
      },
    });
  }

  async findAllTransByRecieverId(recieverId: number): Promise<Transaction[]> {
    return await this.transModel.findAll({
      where: {
        recieverId,
      },
    });
  }
}
