import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeeklyWeatherComponent } from './component/weekly-weather/weekly-weather.component';
import { MatListModule, MatCardModule } from "@angular/material";
import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { DailyWeatherComponent } from './component/daily-weather/daily-weather.component';
import { MiniDailyWeatherCardComponent } from './component/mini-daily-weather-card/mini-daily-weather-card.component';
import { WeatherIconComponent } from './component/weather-icon/weather-icon.component'

@NgModule({
  declarations: [
    AppComponent,
    WeeklyWeatherComponent,
    WeatherCardComponent,
    DailyWeatherComponent,
    MiniDailyWeatherCardComponent,
    WeatherIconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
