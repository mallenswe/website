import { ActionReducerMap } from "@ngrx/store";

import * as fromEmployeeList from '../components/employees-list/store/employeeList.reducer';


export interface AppState {
    employeeList: fromEmployeeList.State;
}

export const appReducer: ActionReducerMap<AppState> = {
    employeeList: fromEmployeeList.employeeListReducer
}