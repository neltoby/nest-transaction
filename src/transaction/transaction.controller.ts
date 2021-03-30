import { Controller, Get } from '@nestjs/common';
import { TransactionService } from './transaction.service'

@Controller('transaction')
export class TransactionController {
  constructor(private readonly transService: TransactionService) {}

  @Get()
  getHello(): string {
    return this.transService.getHello();
  }
}
