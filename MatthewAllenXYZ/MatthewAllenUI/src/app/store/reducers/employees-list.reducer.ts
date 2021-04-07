import * as fromEmployeesList from '../actions/employees-list.action';

import { Person } from '../../models/person.model';
import { ValueProperty } from 'src/app/models/value-property.model';

export interface EmployeesListState {
    entities: { [businessEntityID: number]: Person };
    loaded: boolean;
    loading: boolean;
    filter: {[property: string]: string};
    sort: ValueProperty;
}

export const initialState: EmployeesListState = {
    entities: {},
    loaded: false,
    loading: false,
    filter: {},
    sort: { value: null, property: null }
};

export function reducer(
    state = initialState,
    action: fromEmployeesList.EmployeesListAction
): EmployeesListState {
    switch (action.type) {
        case fromEmployeesList.LOAD_EMPLOYEES_LIST: {
            return {
                ...state,
                loading: true
            };
        }

        case fromEmployeesList.LOAD_EMPLOYEES_LIST_SUCCESS: {
            const employees = action.payload;

            const entities = employees.reduce((entities: { [businessEntityID: number]: Person }, person: Person) => {
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
            const currentEntities = { ...state.entities };

            for (let [index, person] of action.payload.entries()) {
                if (currentEntities[person.businessEntityID]) {
                    entities[person.businessEntityID] = currentEntities[person.businessEntityID];
                } else {
                    entities[person.businessEntityID] = person;
                }
            }

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

        case fromEmployeesList.FILTER_EMPLOYEES_LIST: {
            console.log('reducer FILTER_EMPLOYEES_LIST filter: ');
            return {
                ...state,
                loading: true
            }
        }

        case fromEmployeesList.FILTER_EMPLOYEES_LIST_SUCCESS: {
            const currentFilter = action.payload;
            const filter = {...state.filter};

            // for (let [index, person] of action.payload.entries()) {
            //     if (currentEntities[person.businessEntityID]) {
            //         entities[person.businessEntityID] = currentEntities[person.businessEntityID];
            //     } else {
            //         entities[person.businessEntityID] = person;
            //     }
            // }

            // const 

            if(filter[currentFilter.property]) {
                console.log('FILTER_EMPLOYEES_LIST_SUCCESS currentFilter.value: ', currentFilter.value);
                if(currentFilter.value) {
                    filter[currentFilter.property] = currentFilter.value;
                } else {
                    delete filter[currentFilter.property];
                }

            } else {
                filter[currentFilter.property] = currentFilter.value;
            }

            console.log('reducer FILTER_EMPLOYEES_LIST_SUCCESS filter: ', filter, ' currentFilter: ', currentFilter);

            return {
                ...state,
                loading: false,
                loaded: true,
                filter
            }
        }

        case fromEmployeesList.FILTER_EMPLOYEES_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        case fromEmployeesList.SORT_EMPLOYEES_LIST: {
            console.log('reducer SORT_EMPLOYEES_LIST sort: ');
            return {
                ...state,
                loading: true
            }
        }

        case fromEmployeesList.SORT_EMPLOYEES_LIST_SUCCESS: {
            const sort = action.payload;
            console.log('reducer SORT_EMPLOYEES_LIST_SUCCESS sort: ', sort);
            return {
                ...state,
                loading: false,
                loaded: true,
                sort
            }
        }

        case fromEmployeesList.SORT_EMPLOYEES_LIST_FAIL: {
            return {
                ...state,
                loading: false,
                loaded: false
            }
        }

        default: return state;
    }
}


export const getEmployeesListEntities = (state: EmployeesListState) => state.entities;
export const getEmployeesListFilter = (state: EmployeesListState) => state.filter;
export const getEmployeesListSort = (state: EmployeesListState) => state.sort;
export const getEmployeesListLoading = (state: EmployeesListState) => state.loading;
export const getEmployeesListLoaded = (state: EmployeesListState) => state.loaded;