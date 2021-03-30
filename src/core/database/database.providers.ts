import { Sequelize } from 'sequelize-typescript';
import { Account } from '../../account/account.model';
import { Accounttype } from '../../accounttype/accounttype.model';
import { Transaction } from '../../transaction/transaction.model';
import { User } from '../../user/user.model';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(config);
      sequelize.addModels([User, Transaction, Account, Accounttype]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
