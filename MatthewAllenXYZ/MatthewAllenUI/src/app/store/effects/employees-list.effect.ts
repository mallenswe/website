import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as employeesListActions from '../actions/employees-list.action';
import * as fromService from '../../services';
import { catchError, map, switchMap } from "rxjs/operators";
import { of } from "rxjs";


@Injectable()
export class EmployeesListEffects {
    constructor(
        private actions$: Actions,
        private employeeService: fromService.EmployeeService
    ) { }

    @Effect()
    loadEmployeesList$ = this.actions$
        .pipe(
            ofType(employeesListActions.LOAD_EMPLOYEES_LIST)
            , map((action: employeesListActions.LoadEmployeesList) => action.payload)
            , switchMap((employeeAmount) => {
                return this.employeeService.getEmployeeListByCount(employeeAmount)
                    .pipe(
                        map(employeesList => new employeesListActions.LoadEmployeesListSuccess(employeesList))
                        , catchError(error => of(new employeesListActions.LoadEmployeesListFail(error)))
                    )
            })
        );

    @Effect()
    updateEmployeesList$ = this.actions$
        .pipe(
            ofType(employeesListActions.UPDATE_EMPLOYEES_LIST)
            , map((action: employeesListActions.UpdateEmployeesList) => action.payload)
            , switchMap((employeeAmount) => {
                console.log(`updatemployeesList$ switchMap employeeAmount: `, employeeAmount);
                return this.employeeService.getEmployeeListByCount(employeeAmount)
                    .pipe(
                        map(employeesList => new employeesListActions.UpdateEmployeesListSuccess(employeesList))
                        , catchError(error => of(new employeesListActions.UpdateEmployeesListFail(error)))
                    )
            })
        );

}