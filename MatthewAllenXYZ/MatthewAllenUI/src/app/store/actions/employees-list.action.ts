import { Action } from '@ngrx/store';
import { ValueProperty } from 'src/app/models/value-property.model';

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

export const FILTER_EMPLOYEES_LIST = '[Employees List] Filter Employees List';
export const FILTER_EMPLOYEES_LIST_FAIL = '[Employees List] Filter Employees List Fail';
export const FILTER_EMPLOYEES_LIST_SUCCESS = '[Employees List] Filter Employees List Success';

export class FilterEmployeesList implements Action {
    readonly type = FILTER_EMPLOYEES_LIST;
    constructor(public payload: ValueProperty){}
}

export class FilterEmployeesListFail implements Action {
    readonly type = FILTER_EMPLOYEES_LIST_FAIL;
    constructor(public payload: any){}
}

export class FilterEmployeesListSuccess implements Action {
    readonly type = FILTER_EMPLOYEES_LIST_SUCCESS;
    constructor(public payload: ValueProperty){}
}

export const SORT_EMPLOYEES_LIST = '[Employees List] Sort Employees List';
export const SORT_EMPLOYEES_LIST_FAIL = '[Employees List] Sort Employees List Fail';
export const SORT_EMPLOYEES_LIST_SUCCESS = '[Employees List] Sort Employees List Success';

export class SortEmployeesList implements Action {
    readonly type = SORT_EMPLOYEES_LIST;
    constructor(public payload: ValueProperty){}
}

export class SortEmployeesListFail implements Action {
    readonly type = SORT_EMPLOYEES_LIST_FAIL;
    constructor(public payload: any){}
}

export class SortEmployeesListSuccess implements Action {
    readonly type = SORT_EMPLOYEES_LIST_SUCCESS;
    constructor(public payload: ValueProperty){}
}


// action types
export type EmployeesListAction =
    | LoadEmployeesList
    | LoadEmployeesListFail
    | LoadEmployeesListSuccess
    | UpdateEmployeesList
    | UpdateEmployeesListFail
    | UpdateEmployeesListSuccess
    | FilterEmployeesList
    | FilterEmployeesListFail
    | FilterEmployeesListSuccess
    | SortEmployeesList
    | SortEmployeesListFail
    | SortEmployeesListSuccess
