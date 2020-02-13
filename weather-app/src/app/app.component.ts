import { Component } from '@angular/core';
import { WeatherService } from './services/weather-services.service';
import { GeoCoord } from './models/geo-coord';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private weatherService: WeatherService) {}
  title = 'weather-app';

  dailyWeatherData
  weeklyWeather = this.weatherService.getWeeklyWeather( new GeoCoord( 47.497913, 19.040236 ) )
  dailyWeather = this.weatherService.getDailyWeather( new GeoCoord( 47.497913, 19.040236 ) )
}
