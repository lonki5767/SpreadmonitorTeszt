import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { GeoCoord } from '../models/geo-coord';
import {retry, map} from "rxjs/operators"
import { WeatherWeeklyAdapeter, WeeklyWeather, DailyWeather, WeatherDailyAdapeter } from '../models/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private http: HttpClient, private weeklyWeatherAdapter: WeatherWeeklyAdapeter, private dailyWeatherAdapter : WeatherDailyAdapeter ) { }
  private endpoint = "/weather/"
  

  getWeeklyWeather( geoCoord: GeoCoord ): Observable<WeeklyWeather>{
    return this.http.get<any>( this.endpoint.concat( geoCoord.toString(), '?', "exclude=currently,flags," ) )
    .pipe( retry(2))
    .pipe( map( (res: any[]) => 
      this.weeklyWeatherAdapter.adapt( res["daily"])
     ))
  }

  getDailyWeather( geoCoord: GeoCoord ): Observable<DailyWeather>{
    return this.http.get<any>( this.endpoint.concat( geoCoord.toString(), '?', "exclude=currently,flags," ) )
    .pipe( retry(2))
    .pipe( map( (res: any[]) => 
      this.dailyWeatherAdapter.adapt( res["hourly"])
     ))
  }

}
