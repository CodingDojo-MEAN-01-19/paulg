import { Component, OnInit } from '@angular/core';

import { Cake, Rating } from '../../models';


@Component({
  selector: 'app-cake-detail',
  templateUrl: './cake-detail.component.html',
  styleUrls: ['./cake-detail.component.css']
})
export class CakeDetailComponent implements OnInit {
  cake: Cake;

  constructor() { }

  ngOnInit() {
  }

}
