import { Module } from '@nestjs/common';

import { BookModule } from './api/book';
import { UserModule } from './api/user';

@Module({
  imports: [BookModule, UserModule],
})
export class AppModule {}
