import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

import { Person } from '../../models/person.model';
import { TableColumns } from 'src/app/models/table-columns.model';
import { ValueProperty } from 'src/app/models/value-property.model';

@Component({
  selector: 'app-employees-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public employeesList$: Observable<Person[]>;
  public employeesLayout$: TableColumns[];
  public getEmployeeAmount: number;

  constructor(
    private store: Store<fromStore.EmployeesState>
  ) { }

  ngOnInit(): void {
    this.employeesList$ = this.store.select(fromStore.getEmployeesList);
    this.employeesLayout$ = [
      { id: 1, title: 'First Name', property: 'firstName', position: 0 },
      { id: 2, title: 'Last Name', property: 'lastName', position: 1 },
      { id: 3, title: 'Email Address', property: 'emailAddress', position: 2 },
      { id: 4, title: 'City', property: 'city', position: 3 }
    ]
  }

  public getEmployeesListSearch(event): void {
    console.log('getEmployeesListSearch event: ', this.getEmployeeAmount);
    this.store.dispatch(new fromStore.UpdateEmployeesList(this.getEmployeeAmount));
  }

  public onModifiedColumns(event: TableColumns[]) {
    console.log('onModifiedColumns: ', event);
  }

  public onFilterTable(event: ValueProperty) {
    console.log('employees-list onFilterTable event: ', event);
    // this.store.select(fromStore.getEmployeesListFiltered, {...event}).subscribe(result => result)
    this.store.dispatch(new fromStore.FilterEmployeesList({...event}))
  }

  public onSortTable(event: {value, property}) {
    console.log('employees-list onSortTable event: ', event);
  }
}
