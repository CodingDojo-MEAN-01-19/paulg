import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from './models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent {
    title = 'Angular';
    book = new Book();
    books: Book[] = []

    onSubmit(event: Event, form: NgForm) {
        event.preventDefault();

        this.books.push(this.book);
        this.book = new Book();
        console.log('books', this.books);
        form.reset();
    }
}
