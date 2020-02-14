import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'mini-daily-weather-card',
  templateUrl: './mini-daily-weather-card.component.html',
  styleUrls: ['./mini-daily-weather-card.component.css']
})
export class MiniDailyWeatherCardComponent implements OnInit {

  constructor() { }

  @Input() day : number
  @Input() temperature: number
  @Input() icon: string
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
  }

}
