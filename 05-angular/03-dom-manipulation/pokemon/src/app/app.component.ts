import { Component, OnInit } from '@angular/core';

import { HttpService } from './http.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pokemon';
  pokemon
  abilityJson

  constructor(private _httpService: HttpService){}

  onSubmit() {
    this._httpService.getPokemon(this.randomNum()).subscribe(
      (data) => {
        this.pokemon = data;
      }
    )
  }

  randomNum() {
    return Math.floor(Math.random() * 150) + 1;
  }

  abilityClick(url) {
    this._httpService.getAbility(url).subscribe(
      (data) => {
        this.abilityJson = data;
        let abilityIndex = this.pokemon.abilities.findIndex((ability) => data.name === ability.ability.name);
        this.pokemon.abilities[abilityIndex].ability.pokemon = data.pokemon;
      }
    )
  }
}
