import { BookCreateDTO } from './BookDTO';

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

  static buildFromDTO({ title, description, pages }: BookCreateDTO) {
    const id = Math.floor(Math.random() * 100);

    return new Book(id, title, description, pages);
  }
}
