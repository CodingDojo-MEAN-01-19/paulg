import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BOOKS } from '../../data';
import { Book } from '../../models';
import { SearchPipe } from 'src/app/search.pipe';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
  providers: [SearchPipe]
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book;
  filter: Book = new Book(false);

  constructor(private search: SearchPipe) { }

  ngOnInit() { }

  onCreate(event: Book) {
    this.books.push(event);
  }

  onSelect(book: Book) {
    this.selectedBook = this.selectedBook === book ? null : book;
    console.log('selecting', book);
  }

  clearFilter(): void {
    this.filter = new Book(false);
  }
}
