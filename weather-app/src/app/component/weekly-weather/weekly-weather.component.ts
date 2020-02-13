import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from 'src/app/services/weather-services.service';
import { GeoCoord } from 'src/app/models/geo-coord';
import { WeeklyWeather } from 'src/app/models/weather';
import { WeatherDailyData } from 'src/app/models/weather-data';
import { Observable, interval, Subscription, Observer } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.css']
})
export class WeeklyWeatherComponent implements OnInit {

  constructor( ) { }

  @Input() weeklyWeather: Observable<WeeklyWeather>
  
  public dailyWeathersData: WeatherDailyData[]
  ngOnInit() {
    this.weeklyWeather.subscribe( (res : WeeklyWeather)=>{
      this.dailyWeathersData = res.weatherDatas.splice(1,6)
    })
  }

}
