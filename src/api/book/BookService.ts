import { Injectable } from '@nestjs/common';

import { Book } from './Book';
import { BookDTO } from './BookDTO';

const books: Book[] = [];

@Injectable()
export class BookService {
  async create(bookDTO: BookDTO): Promise<Book> {
    return null;
  }

  async updateById(id: number, bootDTO: BookDTO): Promise<Book> {
    return null;
  }

  async deleteById(id: number): Promise<void> {}

  async getAll(): Promise<Book[]> {
    return null;
  }

  async getById(id: number): Promise<Book> {
    return null;
  }
}
