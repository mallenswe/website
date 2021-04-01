import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '../../store';

import { Person } from '../../models/person.model';

@Component({
  selector: 'app-employees-list',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  public employeesList$: Observable<Person[]>;
  public getEmployeeAmount: number;

  constructor(
    private store: Store<fromStore.EmployeesState>
  ) { }

  ngOnInit(): void {
    this.employeesList$ = this.store.select(fromStore.getEmployeesList);
  }

  public getEmployeesList(event): void {
    console.log('getEmployeesList event: ', this.getEmployeeAmount);
    this.store.dispatch(new fromStore.UpdateEmployeesList(this.getEmployeeAmount));
  }
}
