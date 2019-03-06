import { Book } from '../models';

export const BOOKS: Book[] = [
  {
    id: randomId(1),
    title: 'Stranger in a Strange Land',
    author: 'Robert Heinlein',
    year: 1951,
    pages: 255,
    publisher: 'Delacorte Press'
  },
  {
    id: randomId(2),
    title: 'Slaughter-House 5',
    author: 'Kurt Vonnegut',
    year: 1951,
    pages: 255,
    publisher: 'Breakfast Press'
  },
  {
    id: randomId(3),
    title: 'La La Land',
    author: 'Robert Duvall',
    year: 1951,
    pages: 255,
    publisher: 'Knopf'
  }
];

function randomId(num): number {
  return Math.floor(Math.random() * 100 + num);
};
