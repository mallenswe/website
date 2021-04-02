import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Person } from '../models/person.model';
import { EmployeeLayout } from '../models/employee-layout.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private httpClient: HttpClient
  ) { 
    
  }


  public getEmployeeListByCount(employeeAmount: number): Observable<Person[]> {
    const URL = `${environment.baseURL}/${environment.personController}/GetEmployeeList?employeeAmount=${employeeAmount}`;
    return this.httpClient
      .get<Person[]>(URL)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  public getEmployeeLayout(employeeLayoutID?: number): Observable<EmployeeLayout[]> {
    const URL = `${environment.baseURL}/${environment.personController}/GetEmployeeLayout?layoutID=${employeeLayoutID}`;
    return this.httpClient
      .get<EmployeeLayout[]>(URL)
      .pipe(
        catchError((error: any) => Observable.throw(error.json()))
      );
  }
}
