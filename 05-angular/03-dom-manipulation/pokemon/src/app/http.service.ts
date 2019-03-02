import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPokemon(id): Observable<Object> {
    let pokeObserve = this._http.get('https://pokeapi.co/api/v2/pokemon/' + id);

    return pokeObserve;
  }
  getAbility(url): Observable<Object> {
    let abilityObserve = this._http.get(url);

    return abilityObserve;
  }
  
}
