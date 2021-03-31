

import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromEmployeesList from './employees-list.reducer';
// import * as fromEmployeesLayout from './employees-layout.reducer';

export interface EmployeesState {
    employeesList: fromEmployeesList.EmployeesListState;
    // employeesLayout: from
};

export const reducers: ActionReducerMap<EmployeesState> = {
    employeesList: fromEmployeesList.reducer
};

export const getEmployeesState = createFeatureSelector<EmployeesState>('employees')