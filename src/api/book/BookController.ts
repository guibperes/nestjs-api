import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Body,
  Param,
  ParseIntPipe,
  Inject,
} from '@nestjs/common';

import { Book } from './Book';
import { BookCreateDTO, BookUpdateDTO } from './BookDTO';
import { BookService } from './BookService';

@Controller('books')
export class BookController {
  @Inject()
  private readonly bookService: BookService;

  @Post()
  async create(@Body() bookDTO: BookCreateDTO): Promise<Book> {
    return this.bookService.create(bookDTO);
  }

  @Put(':id')
  async updateById(
    @Param('id', new ParseIntPipe()) id: number,
    @Body() bookDTO: BookUpdateDTO,
  ): Promise<Book> {
    return this.bookService.updateById(id, bookDTO);
  }

  @Delete(':id')
  async deleteById(@Param('id', new ParseIntPipe()) id: number): Promise<void> {
    return this.bookService.deleteById(id);
  }

  @Get()
  async findAll(): Promise<Book[]> {
    return this.bookService.findAll();
  }

  @Get(':id')
  async findById(@Param('id', new ParseIntPipe()) id: number): Promise<Book> {
    return this.bookService.findById(id);
  }
}
