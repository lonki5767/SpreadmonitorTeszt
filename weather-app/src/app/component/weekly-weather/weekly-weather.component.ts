import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather-services.service';
import { GeoCoord } from 'src/app/models/geo-coord';
import { Weather } from 'src/app/models/weather';
import { WeatherData } from 'src/app/models/weather-data';


@Component({
  selector: 'app-weekly-weather',
  templateUrl: './weekly-weather.component.html',
  styleUrls: ['./weekly-weather.component.css']
})
export class WeeklyWeatherComponent implements OnInit {

  constructor( private weatherService: WeatherService ) { }

  dailyWeather : WeatherData[]
  ngOnInit() {
    this.weatherService.getWeeklyWeather( new GeoCoord( 47.497913, 19.040236 ) )
    .subscribe( res=>
      console.log(res)
      //this.dailyWeather = res.weatherDatas
      )
    console.log(this.dailyWeather)
  }
}
