import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeeklyWeatherComponent } from './component/weekly-weather/weekly-weather.component';
import { MatListModule, MatCardModule } from "@angular/material";
import { WeatherCardComponent } from './component/weather-card/weather-card.component';
import { DailyWeatherComponent } from './component/daily-weather/daily-weather.component'

@NgModule({
  declarations: [
    AppComponent,
    WeeklyWeatherComponent,
    WeatherCardComponent,
    DailyWeatherComponent,
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
