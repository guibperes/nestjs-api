import { TypeOrmModule } from '@nestjs/typeorm';

import { Book } from '../api/book';

export const Database = TypeOrmModule.forRoot({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '112233',
  database: 'nestjs',
  synchronize: true,
  entities: [Book],
});
