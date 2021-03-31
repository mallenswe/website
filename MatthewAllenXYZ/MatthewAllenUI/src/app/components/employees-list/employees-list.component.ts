import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';
import * as fromStore from '../../store';

import { Person } from '../../models/person.model';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  
  public employeeList$: Observable<Person[]>;
  public employeesList$: Observable<Person[]>;

  constructor(
    private employeeService: EmployeeService,
    private store: Store<fromStore.EmployeesState>
  ) { }

  ngOnInit(): void {
    this.employeeList$ = this.getEmployeeList();
    this.employeesList$ = this.store.select(fromStore.getEmployeesList);
  }

  public getEmployeeList(employeeAmount: number = 10): Observable<Person[]> {
    return this.employeeService.getEmployeeListByCount(employeeAmount)
  }

}
