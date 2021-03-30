import { IsNotEmpty } from 'class-validator';

export class TransactionDto {
  @IsNotEmpty()
  readonly amount: number;

  @IsNotEmpty()
  readonly senderId: number;

  @IsNotEmpty()
  readonly reciever: number;
}
