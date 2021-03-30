import { Length } from 'class-validator';
import { typeEnum } from './accounttype.enum';

export class AccounttypeDto {
  @Length(7, 8)
  readonly type?: typeEnum;
}
