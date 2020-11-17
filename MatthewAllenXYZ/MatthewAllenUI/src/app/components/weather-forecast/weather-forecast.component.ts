import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { WeatherForecast } from 'src/app/models/weather-forecast.model';
import { WeatherForecastService } from 'src/app/services/weather-forecast.service';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss']
})
export class WeatherForecastComponent implements OnInit {

  public weatherForecast: Array<WeatherForecast>;

  constructor(
    private weatherForecastService: WeatherForecastService
  ) {}

  ngOnInit(): void {
    this.getWeatherForecast();
  }

  public getWeatherForecast(): void {
    this.weatherForecastService.getWeatherForecast().subscribe(response => {
      this.weatherForecast = response;
    })
  }

}
