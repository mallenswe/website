import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
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
    console.log('weather forecast url: ', URL);
    return this.httpClient.get<Array<WeatherForecast>>(URL)
      .pipe(
          map(
              (response: Array<WeatherForecast>) => {
               console.log('weather forecast reponse: ', response);
                return response
              }
            )
          );
  }
}
