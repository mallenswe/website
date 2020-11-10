import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pipe, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { WeatherForecast } from '../models/weather-forecast.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherForecastService {

  constructor(
    private httpClient: HttpClient
  ) { 

  }

  public getWeatherForecast(): Observable<Array<WeatherForecast>> {
    const URL = `${environment.baseURL}/${environment.weatherController}`;
    return this.httpClient.get<Array<WeatherForecast>>(URL)
      .pipe(
          map(
              (response: Array<WeatherForecast>) => response
            )
          );
  }
}
