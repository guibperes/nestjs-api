import { EntityRepository, Repository } from 'typeorm';

import { Book } from './Book';

@EntityRepository(Book)
export class BookRepository extends Repository<Book> {}
