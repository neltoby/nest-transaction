import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateAccountService {
  createAccount() {
    let acct = '00';
    let arr = [];
    arr.length = 8;
    arr.fill(0, 0).forEach((item) => {
      let num = this.generateNumbers();
      acct + num;
    });
    return acct;
  }

  generateNumbers() {
    return Math.floor(Math.random() * 10);
  }
}
