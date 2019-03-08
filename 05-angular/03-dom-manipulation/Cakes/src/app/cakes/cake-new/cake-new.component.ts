import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Cake, Rating } from '../../models';
import { CAKES } from 'src/app/data';

import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-cake-new',
  templateUrl: './cake-new.component.html',
  styleUrls: ['./cake-new.component.css']
})

export class CakeNewComponent implements OnInit {
  cake = new Cake();
  
  @Output()
  createCake = new EventEmitter<Cake>();

  constructor() { }

  ngOnInit() {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault();

    this.cake = new Cake();
    console.log('this cake = ', this.cake)

    form.reset();
  }
}
