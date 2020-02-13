import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class WeatherDailyData {

    constructor(
        public time: Date,
        public summary: string,
        public icon: string,
        public precipIntensity: number,
        public minTemperature: number,
        public maxTemperature: number,
        public humidity: number,
        public pressure: number,
        public windSpeed: number,
        public windGust: number,
        public windBearing: number,
    ){}
}

export class WeatherHourlyData {

    constructor(
        public time: Date,
        public summary: string,
        public icon: string,
        public precipIntensity: number,
        public temperature: number,
        public humidity: number,
        public pressure: number,
        public windSpeed: number,
        public windGust: number,
        public windBearing: number,
    ){}
}

@Injectable({
    providedIn: "root"
  })

export class WeatherDailyDataAdapter implements Adapter<WeatherDailyData> {
    adapt(item: any): WeatherDailyData{
        return new WeatherDailyData(
            new Date(item.time*1000),
            item.summary,
            item.icon,
            item.precipIntensity,
            item.temperatureMin,
            item.temperatureMax,
            item.humidity,
            item.pressure,
            item.windSpeed,
            item.windGust,
            item.windBearing
        )
    }
}

@Injectable({
    providedIn: "root"
  })

export class WeatherHourlyDataAdapter implements Adapter<WeatherHourlyData> {
    adapt(item: any): WeatherHourlyData{
        return new WeatherHourlyData(
            new Date(item.time*1000),
            item.summary,
            item.icon,
            item.precipIntensity,
            item.temperature,
            item.humidity,
            item.pressure,
            item.windSpeed,
            item.windGust,
            item.windBearing
        )
    }
}
