import { Controller, Post, Get, Put, Delete, Body } from '@nestjs/common';

import { Book } from './Book';
import { BookDTO } from './BookDTO';

const books = [];

@Controller('books')
export class BookController {
  @Post()
  async create(@Body() bookDTO: BookDTO): Promise<Book> {
    const book = Book.buildFromDTO(bookDTO);

    books.push(book);
    return book;
  }

  @Put(':id')
  updateById(): Book {
    return null;
  }

  @Delete(':id')
  deleteById() {}

  @Get()
  findAll(): Book {
    return null;
  }

  @Get(':id')
  findById(): Book {
    return null;
  }
}
