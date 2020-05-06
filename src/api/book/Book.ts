import { BookDTO } from './BookDTO';

export class Book {
  id: number;

  title: string;

  description: string;

  pages: number;

  constructor(id: number, title: string, description: string, pages: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.pages = pages;
  }

  static buildFromDTO({ title, description, pages }: BookDTO) {
    const id = Math.random() * 100 + 1;

    return new Book(id, title, description, pages);
  }
}
