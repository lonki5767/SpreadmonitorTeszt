import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GeoCoord } from '../models/geo-coord';
import {retry, map} from "rxjs/operators"
import { WeatherAdapeter, Weather } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient, private adapter: WeatherAdapeter ) { }

  endpoint = "/weather/"
  

  getWeeklyWeather( geoCoord: GeoCoord ): Observable<Weather>{
    return this.http.get<any>( this.endpoint.concat( geoCoord.toString(), '?', "exclude=currently,flags," ) )
    .pipe( retry(2))
    .pipe( map( (res: any[]) => {
      return this.adapter.adapt( res["daily"])
    } ))
  }

}
