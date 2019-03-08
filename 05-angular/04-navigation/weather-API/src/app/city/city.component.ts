import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  data;
  currCity;
  currURL;
  cities = [
    { name: 'seattle', id: 5809844 },
    { name: 'burbank', id: 5331835 },
    { name: 'sanjose', id: 5393021 },
    { name: 'dallas', id: 4684888 },
    { name: 'chicago', id: 4887398 },
    { name: 'dc', id: 4366164 }
  ];
  

  constructor(private readonly route: ActivatedRoute, private _http: WeatherService) { }

  

  ngOnInit() {
    this.currCity = this.route.paramMap.subscribe(params => {
      params.get('path')});
    console.log('getting', this.currCity)
    /* for (let name of this.cities) {
      if (name == this.currCity) {
        this.currURL = `api.openweathermap.org/data/2.5/weather?id=${name.id}&appid=65036b8d41536ad067f7d3079698ebcc`
      }};
    this._http.getCity(this.currURL).subscribe(data => this.data = data);
    console.log("printing", this.currCity) */
  }
}
