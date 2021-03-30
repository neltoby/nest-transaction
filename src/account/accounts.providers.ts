import { Account } from './account.model';
import { ACCOUNT_REPOSITORY } from '../core/constants';

export const accountProviders = [
  {
    provide: ACCOUNT_REPOSITORY,
    useValue: Account,
  },
];
