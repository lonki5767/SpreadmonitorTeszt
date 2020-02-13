import { GeoCoord } from './geo-coord'
import { WeatherData } from './weather-data';
import { Injectable } from "@angular/core";

export class Weather {
    constructor(
    public summary : string,
    public icon : string,
    public weatherDatas : WeatherData[]
    ){}
}

@Injectable({
    providedIn: "root"
  })
export class WeatherAdapeter{
    adapt(item:any): Weather{
        return new Weather( item.summary, item.icon,  <WeatherData[]>item.data)
    }
}
    

