import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import * as employeesListActions from '../actions/employees-list.action';
import * as fromService from '../../services';
import { catchError, map, switchMap, withLatestFrom } from "rxjs/operators";
import { of } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromStore from '../../store';


@Injectable()
export class EmployeesListEffects {
    constructor(
        private actions$: Actions,
        private employeeService: fromService.EmployeeService,
        private store: Store<fromStore.EmployeesState>
    ) { }

    @Effect()
    loadEmployeesList$ = this.actions$
        .pipe(
            ofType(employeesListActions.LOAD_EMPLOYEES_LIST)
            , map((action: employeesListActions.LoadEmployeesList) => action.payload)
            , switchMap((employeeAmount) => {
                console.log(`loadEmployeesList$ switchMap employeeAmount: `, employeeAmount);
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

    @Effect()
    filterEmployeesList$ = this.actions$
        .pipe(
            ofType(employeesListActions.FILTER_EMPLOYEES_LIST)
            , map((action: employeesListActions.FilterEmployeesList) => action.payload)
            , switchMap((filterData) => {
                console.log('filterEmployeesList$ switchMap ValueProperty: ', filterData);
                return of(new employeesListActions.FilterEmployeesListSuccess(filterData))
                    .pipe(
                        map(filter => filter)
                        , catchError(error => of(new employeesListActions.FilterEmployeesListFail(error)))
                    )
            })
        )

    @Effect()
    sortEmployeesList$ = this.actions$
        .pipe(
            ofType(employeesListActions.SORT_EMPLOYEES_LIST)
            , map((action: employeesListActions.SortEmployeesList) => action.payload)
            , switchMap((sortData) => {
                console.log('sortEmployeesList$ switchMap ValueProperty: ', sortData);
                return of(new employeesListActions.SortEmployeesListSuccess(sortData))
                    .pipe(
                        map(sort => sort)
                        , catchError(error => of(new employeesListActions.SortEmployeesListFail(error)))
                    )
            })
        )

}