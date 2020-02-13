import { WeeklyWeather } from './weather';
import { GeoCoord } from './geo-coord';

export class CityWeather {
    name: String
    geoCoord: GeoCoord
    weekly: WeeklyWeather[]
}

