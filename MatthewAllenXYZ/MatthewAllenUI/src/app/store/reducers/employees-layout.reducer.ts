import * as fromEmployeesLayout from '../actions/employees-layout.action';
import { EmployeeLayout } from 'src/app/models/employee-layout.model';

export interface EmployeesLayoutState {
    entities: { [id: number]: EmployeeLayout};
    loaded: boolean;
    loading: boolean;
}

export const initialState: EmployeesLayoutState = {
    entities: {},
    loaded: false,
    loading: false
}

export function reducer(
    state = initialState,
    action: fromEmployeesLayout.EmployeesLayoutAction
): EmployeesLayoutState {

    switch (action.type) {
        case fromEmployeesLayout.LOAD_EMPLOYEES_LAYOUT: {
            return {
                ...state,
                loading: true
            };
        }
        case fromEmployeesLayout.LOAD_EMPLOYEES_LAYOUT_SUCCESS: {
            const layouts = action.payload;

            const entities = layouts.reduce((entities: {[id: number]: EmployeeLayout}, employeeLayout:EmployeeLayout) => {
                return {
                    ...entities,
                    [employeeLayout.id]: employeeLayout
                }
            }, {
                ...state.entities
            })

            return {
                ...state,
                loaded: true,
                loading: false,
                entities
            };
        }

        case fromEmployeesLayout.LOAD_EMPLOYEES_LAYOUT_FAIL: {
            return {
                ...state,
                loaded: false,
                loading: false
            }
        }


        case fromEmployeesLayout.CREATE_EMPLOYEES_LAYOUT_SUCCESS:
        case fromEmployeesLayout.UPDATE_EMPLOYEES_LAYOUT_SUCCESS: {

            const layout = action.payload;
            const entities = {
                ...state.entities,
                [layout.id]: layout
            }

            return {
                ...state,
                entities
            }
        }

        case fromEmployeesLayout.REMOVE_EMPLOYEES_LAYOUT_SUCCESS: {
            const layout = action.payload;
            const {[layout.id]: removed, ...entities} = state.entities;

            return {
                ...state,
                entities
            }
        }

        default: return state
    }
}