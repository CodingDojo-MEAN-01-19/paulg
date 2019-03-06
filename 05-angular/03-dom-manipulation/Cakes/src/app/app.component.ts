import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Cake, Rating } from './models';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Cakes';
  cake = new Cake();
  currRating = new Rating();
  cakeList: Cake[] = [];

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();
    console.log('submit button clicked', this.cakeList);
    console.log(this.cake.baker);

    this.cakeList.push(this.cake);
    this.cake = new Cake();

    form.reset();
  }

  submitRating(event: Event) {
    event.preventDefault();
    console.log('printing', this.currRating);
  }
}
