import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { WeeklyWeatherComponent } from './component/weekly-weather/weekly-weather.component';
import { MatGridListModule, MatCardModule } from "@angular/material";
import { WeatherCardComponent } from './component/weather-card/weather-card.component'

@NgModule({
  declarations: [
    AppComponent,
    WeeklyWeatherComponent,
    WeatherCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatGridListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
