import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClientModule) { }

  getPokemon(id) {
    let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/' + id);
    return pokemon;
  }

}
