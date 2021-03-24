import { Action } from "@ngrx/store";
import { Person } from "src/app/models/person.model";

export const SET_EMPLOYEES = '[Employee List] Set Employees';
export const GET_EMPLOYEES = '[Employee List] Get Employees';

export class SetEmployees implements Action {
    readonly type = SET_EMPLOYEES;
    constructor(public payload: Person[]) {}
}

export class GetEmployees implements Action {
    readonly type = GET_EMPLOYEES;
}


export type EmployeeListActions = SetEmployees | GetEmployees;