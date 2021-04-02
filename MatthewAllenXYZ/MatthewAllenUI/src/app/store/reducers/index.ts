import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromEmployeesList from './employees-list.reducer';
import * as fromEmployeesLayout from './employees-layout.reducer';

export interface EmployeesState {
    employeesList: fromEmployeesList.EmployeesListState;
    employeesLayout: fromEmployeesLayout.EmployeesLayoutState;
};

export const reducers: ActionReducerMap<EmployeesState> = {
    employeesList: fromEmployeesList.reducer,
    employeesLayout: fromEmployeesLayout.reducer
};

export const getEmployeesState = createFeatureSelector<EmployeesState>('employees');