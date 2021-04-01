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
    console.log('employees-list reducer state: ',state, 'action: ', action);
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
                    [person.businessEntityID]: person
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

        case fromEmployeesList.UPDATE_EMPLOYEES_LIST: {
            return {
                ...state,
                loading: true
            }
        }
        case fromEmployeesList.UPDATE_EMPLOYEES_LIST_SUCCESS: {
            const entities = {};
            const currentEntities = {...state.entities};

            for(let [index, person] of action.payload.entries()) {
                if(currentEntities[person.businessEntityID]){
                    entities[person.businessEntityID] = currentEntities[person.businessEntityID];
                } else {
                    entities[person.businessEntityID] = person;
                }
            }
            
            console.log('UPDATE_EMPLOYEES_LIST_SUCCESS entities: ', entities);
            return {
                ...state,
                loading: false,
                loaded: true,
                entities
            }
        }

        case fromEmployeesList.UPDATE_EMPLOYEES_LIST_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            }
        }

        default: return state;
    }
}


export const getEmployeesListEntities = (state: EmployeesListState) => state.entities;
export const getEmployeesListLoading = (state: EmployeesListState) => state.loading;
export const getEmployeesListLoaded = (state: EmployeesListState) => state.loaded;