import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { BOOKS } from '../../data';
import { Book } from '../../models';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = BOOKS;
  selectedBook: Book

  constructor() { }

  ngOnInit() { }

  onCreate(event: Book) {
    this.books.push(event);
  }

  onSelect(book: Book) {
    this.selectedBook = this.selectedBook === book ? null : book;
    console.log('selecting', book);
  }

}
