import { Action } from '@ngrx/store';

import { EmployeeLayout } from '../../models/employee-layout.model';


// load employees layout
export const LOAD_EMPLOYEES_LAYOUT = '[Employees Layout] Load Employees Layout';
export const LOAD_EMPLOYEES_LAYOUT_FAIL = '[Employees Layout] Load Employees Layout Fail';
export const LOAD_EMPLOYEES_LAYOUT_SUCCESS = '[Employees Layout] Load Employees Layout Success';


export class LoadEmployeesLayout implements Action {
    readonly type = LOAD_EMPLOYEES_LAYOUT;
};

export class LoadEmployeesLayoutFail implements Action {
    readonly type = LOAD_EMPLOYEES_LAYOUT_FAIL;
    constructor(public payload: any) {}
};

export class LoadEmployeesLayoutSuccess implements Action {
    readonly type = LOAD_EMPLOYEES_LAYOUT_SUCCESS;
    constructor(public payload: EmployeeLayout[]) {}
}

// create employees layout
export const CREATE_EMPLOYEES_LAYOUT = '[Employees Layout] Create Employees Layout';
export const CREATE_EMPLOYEES_LAYOUT_FAIL = '[Employees Layout] Create Employees Layout Fail';
export const CREATE_EMPLOYEES_LAYOUT_SUCCESS = '[Employees Layout] Create Employees Layout Success';


export class CreateEmployeesLayout implements Action {
    readonly type = CREATE_EMPLOYEES_LAYOUT;
    constructor(public payload: EmployeeLayout) {}
};

export class CreateEmployeesLayoutFail implements Action {
    readonly type = CREATE_EMPLOYEES_LAYOUT_FAIL;
    constructor(public payload: any) {}
};

export class CreateEmployeesLayoutSuccess implements Action {
    readonly type = CREATE_EMPLOYEES_LAYOUT_SUCCESS;
    constructor(public payload: EmployeeLayout) {}
}

// update employees layout
export const UPDATE_EMPLOYEES_LAYOUT = '[Employees Layout] Update Employees Layout';
export const UPDATE_EMPLOYEES_LAYOUT_FAIL = '[Employees Layout] Update Employees Layout Fail';
export const UPDATE_EMPLOYEES_LAYOUT_SUCCESS = '[Employees Layout] Update Employees Layout Success';


export class UpdateEmployeesLayout implements Action {
    readonly type = UPDATE_EMPLOYEES_LAYOUT;
    constructor(public payload: EmployeeLayout){}
};

export class UpdateEmployeesLayoutFail implements Action {
    readonly type = UPDATE_EMPLOYEES_LAYOUT_FAIL;
    constructor(public payload: any) {}
};

export class UpdateEmployeesLayoutSuccess implements Action {
    readonly type = UPDATE_EMPLOYEES_LAYOUT_SUCCESS;
    constructor(public payload: EmployeeLayout) {}
}

// remove employees layout
export const REMOVE_EMPLOYEES_LAYOUT = '[Employees Layout] Remove Employees Layout';
export const REMOVE_EMPLOYEES_LAYOUT_FAIL = '[Employees Layout] Remove Employees Layout Fail';
export const REMOVE_EMPLOYEES_LAYOUT_SUCCESS = '[Employees Layout] Remove Employees Layout Success';


export class RemoveEmployeesLayout implements Action {
    readonly type = REMOVE_EMPLOYEES_LAYOUT;
    constructor(public payload: EmployeeLayout){}
};

export class RemoveEmployeesLayoutFail implements Action {
    readonly type = REMOVE_EMPLOYEES_LAYOUT_FAIL;
    constructor(public payload: any) {}
};

export class RemoveEmployeesLayoutSuccess implements Action {
    readonly type = REMOVE_EMPLOYEES_LAYOUT_SUCCESS;
    constructor(public payload: EmployeeLayout) {}
};

// action types
export type EmployeesLayoutAction =
    | LoadEmployeesLayout
    | LoadEmployeesLayoutFail
    | LoadEmployeesLayoutSuccess
    | CreateEmployeesLayout
    | CreateEmployeesLayoutFail
    | CreateEmployeesLayoutSuccess
    | UpdateEmployeesLayout
    | UpdateEmployeesLayoutFail
    | UpdateEmployeesLayoutSuccess
    | RemoveEmployeesLayout
    | RemoveEmployeesLayoutFail
    | RemoveEmployeesLayoutSuccess