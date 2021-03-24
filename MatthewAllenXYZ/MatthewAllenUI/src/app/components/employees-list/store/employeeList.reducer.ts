import { Person } from "src/app/models/person.model";
import * as EmployeeListActions from '../store/employeeList.action';


export interface State {
    employees: Person[];
}

const initialState: State = {
    employees: []
}

export function employeeListReducer(state: State = initialState, action: EmployeeListActions.EmployeeListActions) {
    switch(action.type) {
        case EmployeeListActions.SET_EMPLOYEES: return { ...state, employees: [...action.payload]};

        default:
            return state;
    }
}