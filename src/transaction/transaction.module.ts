import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Transaction } from './transaction.model';
import { transactionsProviders } from './transactions.providers';

@Module({
  imports: [SequelizeModule.forFeature([Transaction])],
  controllers: [TransactionController],
  providers: [TransactionService, ...transactionsProviders],
})
export class TransactionModule {}
