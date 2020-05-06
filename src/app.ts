import { Module } from '@nestjs/common';

import { BookModule } from './api/book';

@Module({
  imports: [BookModule],
})
export class AppModule {}
