import * as fromEmployeesList from '../actions/employees-list.action';

import { Person } from '../../models/person.model';

export interface EmployeesListState {
    entities: {[businessEntityID: number]: Person}
    loaded: boolean;
    loading: boolean;
}

export const initialState: EmployeesListState = {
    entities: {},
    loaded: false,
    loading: false
};

export function reducer(
    state = initialState,
    action: fromEmployeesList.EmployeesListAction
): EmployeesListState {
    switch(action.type) {
        case fromEmployeesList.LOAD_EMPLOYEES_LIST: {
            return {
                ...state,
                loading: true
            };
        }

        case fromEmployeesList.LOAD_EMPLOYEES_LIST_SUCCESS: {
            console.log('LOAD_EMPLOYEES_LIST_SUCCESS action.payload: ', action.payload);
            const employees = action.payload;

            const entities = employees.reduce((entities: {[businessEntityID: number]: Person}, person: Person) => {
                return {
                    ...entities,
                    [person.BusinessEntityID]: person
                }
            }, {
                ...state.entities
            });
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            };
        }

        case fromEmployeesList.LOAD_EMPLOYEES_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }
    }
}


export const getEmployeesListEntities = (state: EmployeesListState) => state.entities;
export const getEmployeesListLoading = (state: EmployeesListState) => state.loading;
export const getEmployeesListLoaded = (state: EmployeesListState) => state.loaded;