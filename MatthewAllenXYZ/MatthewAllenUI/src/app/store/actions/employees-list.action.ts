import { Action } from '@ngrx/store';

import { Person } from '../../models/person.model';

// load employees list
export const LOAD_EMPLOYEES_LIST = '[Employees List] Load Employees List';
export const LOAD_EMPLOYEES_LIST_FAIL = '[Employees List] Load Employees List Fail';
export const LOAD_EMPLOYEES_LIST_SUCCESS = '[Employees List] Load Employees List Success';
export const SHOW_EMPLOYEES = '[Employees List] Show Employees List';

export class LoadEmployeesList implements Action {
    readonly type = LOAD_EMPLOYEES_LIST;
    constructor(public payload: number){}
};

export class LoadEmployeesListFail implements Action {
    readonly type = LOAD_EMPLOYEES_LIST_FAIL;
    constructor(public payload: any) {}
};

export class LoadEmployeesListSuccess implements Action {
    readonly type = LOAD_EMPLOYEES_LIST_SUCCESS;
    constructor(public payload: Person[]) {}
}




// Update employees list
export const UPDATE_EMPLOYEES_LIST = '[Employees List] Update Employees List';
export const UPDATE_EMPLOYEES_LIST_FAIL = '[Employees List] Update Employees List Fail';
export const UPDATE_EMPLOYEES_LIST_SUCCESS = '[Employees List] Update Employees List Success';

export class UpdateEmployeesList implements Action {
    readonly type = UPDATE_EMPLOYEES_LIST;
    constructor(public payload: number){}
};

export class UpdateEmployeesListFail implements Action {
    readonly type = UPDATE_EMPLOYEES_LIST_FAIL;
    constructor(public payload: any) {}
};

export class UpdateEmployeesListSuccess implements Action {
    readonly type = UPDATE_EMPLOYEES_LIST_SUCCESS;
    constructor(public payload: Person[]) {}
}


// Show Employee List
export class ShowEmployeesList implements Action {
    readonly type = SHOW_EMPLOYEES;
    constructor(public payload: Person[]) {}
}

// action types
export type EmployeesListAction =
    | LoadEmployeesList
    | LoadEmployeesListFail
    | LoadEmployeesListSuccess
    | UpdateEmployeesList
    | UpdateEmployeesListFail
    | UpdateEmployeesListSuccess
    | ShowEmployeesList
