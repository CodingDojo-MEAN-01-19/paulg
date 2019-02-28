import { Book } from '../models';

export const BOOKS: Book[] = [
  {
    id: randomId(),
    title: 'Stranger in a Strange Land',
    author: 'Robert Heinlein',
    year: 1951,
    pages: 255,
    publisher: 'Delacorte Press'
  },
  {
    id: randomId(),
    title: 'Slaughter-House 5',
    author: 'Kurt Vonnegut',
    year: 1951,
    pages: 255,
    publisher: 'Breakfast Press'
  },
  {
    id: randomId(),
    title: 'La La Land',
    author: 'Robert Duvall',
    year: 1951,
    pages: 255,
    publisher: 'Knopf'
  }
];

function randomId(): number {
  return Math.floor(Math.random() * 100);
};
