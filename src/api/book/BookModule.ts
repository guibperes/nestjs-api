import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BookController } from './BookController';
import { BookService } from './BookService';
import { BookRepository } from './BookRepository';

@Module({
  imports: [TypeOrmModule.forFeature([BookRepository])],
  controllers: [BookController],
  providers: [BookService],
  exports: [BookService],
})
export class BookModule {}
