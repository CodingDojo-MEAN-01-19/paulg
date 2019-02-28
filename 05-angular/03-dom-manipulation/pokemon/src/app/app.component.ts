import { Component } from '@angular/core';

import { HttpService } from './http.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent {
  title = 'pokemon';

  constructor(private _httpService: HttpService){}

  onNgInit() {
    let bulba = this._httpService.getPokemon(1)
    let poketext = this.formatPokemon(bulba)
  }

  formatPokemon(pokeJson) {

  }
}
