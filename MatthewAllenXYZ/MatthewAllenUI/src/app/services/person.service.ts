import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor( private httpClient: HttpClient) {

  }

  public getPersonByBusinessEntityID(businessEntityID: number): Observable<Person> {
    const URL = `${environment.baseURL}/${environment.personController}?businessEntityID=${businessEntityID}`;
    return this.httpClient.get<Person>(URL);
  }

  public getEmployeeListByCount(employeeAmount: number): Observable<Person[]> {
    const URL = `${environment.baseURL}/${environment.personController}/GetEmployeeList?employeeAmount=${employeeAmount}`;
    return this.httpClient
              .get<Person[]>(URL)
              .pipe(
                catchError((error: any) => Observable.throw(error.json()))
              );
  }

  
}
