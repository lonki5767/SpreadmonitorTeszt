import { Component, OnInit, Input } from '@angular/core';
import { WeatherDailyData } from 'src/app/models/weather-data';

@Component({
  selector: 'weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {

  constructor() { }

  @Input() icon: string
  @Input() temperature: number

  ngOnInit() {
    //this.getWeekDay()
  }
}
