import { HttpClient, HttpRequest } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@Injectable()
export class AppComponent {
  title: string = 'Matthew Allen';
  baseURL: string = 'https://localhost:44326';

  constructor(
    httpClient: HttpClient
  ) {
    httpClient.get(`${this.baseURL}/WeatherForecast`).subscribe(response => {
      console.log('WeatheForeast response: ', response);
    })
  }
}
