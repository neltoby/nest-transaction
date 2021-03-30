import { Accounttype } from './accounttype.model';
import { ACCOUNTTYPE_REPOSITORY } from '../core/constants';

export const accounttypesProviders = [
  {
    provide: ACCOUNTTYPE_REPOSITORY,
    useValue: Accounttype,
  },
];
