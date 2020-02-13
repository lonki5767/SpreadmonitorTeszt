import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { DailyWeather } from 'src/app/models/weather';
import { WeatherHourlyData } from 'src/app/models/weather-data';

@Component({
  selector: 'app-daily-weather',
  templateUrl: './daily-weather.component.html',
  styleUrls: ['./daily-weather.component.css']
})
export class DailyWeatherComponent implements OnInit {

  @Input() dailyWeather : Observable<DailyWeather>

  hourlyWeathersData : WeatherHourlyData[]

  constructor() { }

  ngOnInit() {
    this.dailyWeather.subscribe( (res : DailyWeather)=>{
      this.hourlyWeathersData = res.weatherDatas.splice(0,23)
    })
  }

  getCurrentHour(): WeatherHourlyData {
    
    return this.hourlyWeathersData ? this.hourlyWeathersData[0]: null
  }

  getCurrentHourTemp() : number {
    return this.getCurrentHour() ? this.getCurrentHour().temperature : 0
  }

  getCurrentHourDay() : number {
    if( this.getCurrentHour() ){
      console.log(this.getCurrentHour().time.getDay())
      return this.getCurrentHour().time.getDay()
    } else{
      return 0
    }
  }

}
