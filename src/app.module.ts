import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { TransactionModule } from './transaction/transaction.module';
import { UserModule } from './user/user.module';
import { AccountModule } from './account/account.module';
import { AccounttypeModule } from './accounttype/accounttype.module';
import { LoggerService } from './logger/logger.service';
import { LoggerModule } from './logger/logger.module';
import { DatabaseModule } from './core/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    // SequelizeModule.forRoot({
    //   dialect: 'postgres',
    //   host: 'localhost',
    //   port: 5433,
    //   username: 'postgres',
    //   password: '3416_Neltoby',
    //   database: 'atom',
    //   autoLoadModels: true,
    //   synchronize: true,
    //   // models: [User, Transaction, Account, Accounttype]
    // }),
    TransactionModule,
    UserModule,
    AccountModule,
    AccounttypeModule,
    LoggerModule,
    DatabaseModule,
  ],
  providers: [AppService, LoggerService],
  controllers: [AppController],
})
export class AppModule {}
