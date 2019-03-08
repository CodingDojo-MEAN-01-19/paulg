import { Component, OnInit, Output } from '@angular/core';

import { Cake, Rating } from '../../models';
import { CAKES } from 'src/app/data';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cake-list',
  templateUrl: './cake-list.component.html',
  styleUrls: ['./cake-list.component.css']
})
export class CakeListComponent implements OnInit {
  cakeList: Cake[] = CAKES;
  selectedCake: Cake;

  constructor() { }

  ngOnInit() {
    console.log(this.cakeList)
  }

  submitRating(event: Event, form: NgForm, curr) {
    event.preventDefault();

    console.log(curr)
    // this.selectedCake.ratings.push()
  }

  displayDetails() {
    console.log('Display Deets')
    this.selectedCake = this.selectedCake
  }
}
