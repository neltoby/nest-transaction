import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule, getModelToken } from '@nestjs/sequelize';
import { UserService } from './user.service';
import { User } from './user.model';
import { Account } from '../account/account.model';

describe('UserService', () => {
  let service: UserService;
  let user = {
    firstname: 'Ali',
    lastName: 'Simbi',
    email: 'ali@gmail.com',
  };
  let account = {
    account: 173737,
    userId: 1,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User),
          useValue: user,
        },
        {
          provide: getModelToken(Account),
          useValue: account,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create user', async () => {
    const data = {
      firstName: 'Ali',
      lastName: 'Simbi',
      email: 'ali@gmail.com',
    };
    jest.spyOn(service, 'create').mockImplementation((data) => data);
    expect(await service.create(data)).toBe(data);
  });

  it('find user', async () => {
    jest.spyOn(service, 'findOne');
    expect(await service.findOne(1)).toHaveBeenCalledTimes(1);
  });

  it('find users', async () => {
    jest.spyOn(service, 'findAll');
    expect(await service.findAll()).toHaveBeenCalledTimes(1);
  });

  it('delete user', async () => {
    jest.spyOn(service, 'deleteOne');
    expect(await service.deleteOne(1)).toHaveBeenCalledTimes(1);
  });
});
