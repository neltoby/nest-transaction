import { Transaction } from './transaction.model';
import { TRANSACTION_REPOSITORY } from '../core/constants';

export const transactionsProviders = [
  {
    provide: TRANSACTION_REPOSITORY,
    useValue: Transaction,
  },
];
