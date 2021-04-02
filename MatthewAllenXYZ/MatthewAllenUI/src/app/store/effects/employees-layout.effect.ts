import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import * as fromService from '../../services';
import * as employeesLayoutActions from '../actions/employees-layout.action';


@Injectable()
export class EmployeesLayoutEffects {
    constructor(
        private actions$: Actions,
        private employeeService: fromService.EmployeeService
    ) {}


    @Effect()
    loadLayout$ = this.actions$
        .pipe(
            ofType(employeesLayoutActions.LOAD_EMPLOYEES_LAYOUT)
            ,switchMap(() => {
                return this.employeeService.getEmployeeLayout()
                    .pipe(
                        map(employeeLayout => new employeesLayoutActions.LoadEmployeesLayoutSuccess(employeeLayout))
                        ,catchError(error => of(new employeesLayoutActions.LoadEmployeesLayoutFail(error)))
                    )
            })
        )
}