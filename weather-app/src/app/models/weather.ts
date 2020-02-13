import { GeoCoord } from './geo-coord'
import { WeatherDailyData, WeatherHourlyData, WeatherDailyDataAdapter ,WeatherHourlyDataAdapter} from './weather-data';
import { Injectable } from "@angular/core";
import { Adapter } from './adapter'


export class DailyWeather {
    constructor(
        public summary : string,
        public icon : string,
        public weatherDatas : WeatherHourlyData[]
        ){}
}

export class WeeklyWeather {
    constructor(
        public summary : string,
        public icon : string,
        public weatherDatas : WeatherDailyData[]
        ){}
}

@Injectable({
    providedIn: "root"
  })
export class WeatherDailyAdapeter implements Adapter<DailyWeather>{
    constructor( private weatherDataAdapter : WeatherHourlyDataAdapter){}
    adapt(item:any): DailyWeather{
        
        return new DailyWeather( item.summary, item.icon, 
            item.data.map( data=>
            this.weatherDataAdapter.adapt(data)
            )
        )
    }
}

@Injectable({
    providedIn: "root"
  })
export class WeatherWeeklyAdapeter implements Adapter<WeeklyWeather>{
    constructor( private weatherDataAdapter : WeatherDailyDataAdapter){}
    adapt(item:any): WeeklyWeather{
        
        return new WeeklyWeather( item.summary, item.icon, 
            item.data.map( data=>
            this.weatherDataAdapter.adapt(data)
            )
        )
    }
}
    

