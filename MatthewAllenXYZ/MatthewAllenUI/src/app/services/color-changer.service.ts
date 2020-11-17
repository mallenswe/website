import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ColorChangerService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getColor(): Observable<Array<string>> {
    const URL = `${environment.baseURL}/${environment.colorChangerController}`;
    return this.httpClient.get<Array<string>>(URL).pipe(
      map(
      (response: Array<string>) => response
    ))
  }
}
