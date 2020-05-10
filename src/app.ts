import { Module } from '@nestjs/common';

import { Database } from './database';
import { BookModule } from './api/book';
import { UserModule } from './api/user';

@Module({
  imports: [Database, BookModule, UserModule],
})
export class AppModule {}
