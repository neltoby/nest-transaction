import { Injectable, Inject } from '@nestjs/common';
import { Accounttype } from './accounttype.model';
import { AccounttypeDto } from './accounttype.dto';
import { ACCOUNTTYPE_REPOSITORY } from '../core/constants';
import { typeEnum } from './accounttype.enum';

@Injectable()
export class AccounttypeService {
  constructor(
    @Inject(ACCOUNTTYPE_REPOSITORY)
    private accttypeModel: typeof Accounttype,
  ) {}

  async create(data: any): Promise<Accounttype> {
    return await this.accttypeModel.create({ ...data });
  }

  async findOne(id: number): Promise<Accounttype> {
    return await this.accttypeModel.findOne({
      where: {
        id,
      },
    });
  }

  async findOneWithParent(id: number): Promise<Accounttype> {
    return await this.accttypeModel.findOne({
      where: {
        id,
      },
      include: 'account',
    });
  }
}
