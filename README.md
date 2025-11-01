# nest-transaction

Opinionated NestJS example showing a few transaction patterns with Sequelize and TypeORM.

## What this repo demonstrates
- Request-scoped transactions via interceptor/provider patterns
- Unit of Work style orchestration across services
- Using QueryRunner (TypeORM) and Sequelize transaction (Sequelize)
- Error propagation, rollbacks, and idempotency hints

## Quick start
Install dependencies, set up .env, and run `npm run start:dev`.

## Patterns included
1. Per-request transaction (Sequelize) using an interceptor.
2. Explicit transaction (TypeORM) using DataSource.createQueryRunner().
3. Compensation hint: publish outbox event on commit, skip on rollback.
