import { Component, OnInit, Input } from '@angular/core';
import { WeatherDailyData } from 'src/app/models/weather-data';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  constructor() { }

  @Input() day : number
  @Input() mini : boolean
  @Input() temperature: number
  weekday= [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
  getWeekDay():string{
    return this.weekday[this.day]
  }
  ngOnInit() {
    //this.getWeekDay()
  }
}
