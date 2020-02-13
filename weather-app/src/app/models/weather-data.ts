export class WeatherData {

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
