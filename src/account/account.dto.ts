import { Length } from 'class-validator';

export class AccountDto {
  @Length(10)
  readonly account: string;

  readonly userId: number;
}
