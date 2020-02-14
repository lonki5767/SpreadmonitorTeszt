import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'weather-icon',
  templateUrl: './weather-icon.component.html',
  styleUrls: ['./weather-icon.component.css']
})
export class WeatherIconComponent implements OnInit {

  constructor() { }

  @Input() icon: string
  icons={
    "clear-day" : "wi-day-sunny",
    "clear-night" : "wi-night-clear",
    "rain" : "wi-day-rain",
    "snow" : "wi-day-snow",
    "sleet" : "wi-day-sleet",
    "wind" : "wi-day-windy",
    "fog" : "wi-day-fog",
    "cloudy" : "wi-day-cloudy",
    "partly-cloudy-day" : "wi-night-partly-cloudy",
    "partly-cloudy-night" : "wi-night-alt-partly-cloudy"
  }

  getWeatherIcon(){
    return this.icon? this.icons[this.icon] : ""
  }


  ngOnInit() {
  }

}
