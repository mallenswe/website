import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromEmployeesList from '../reducers/employees-list.reducer';

export const getEmployeesListState = createSelector(fromFeature.getEmployeesState, (state: fromFeature.EmployeesState) => state.employeesList);

export const getEmployeesListEntities = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListEntities);

export const getEmployeesList = createSelector(getEmployeesListEntities, entities => {
    return Object.keys(entities).map(businessEntityId => entities[parseInt(businessEntityId, 10)]);
});

export const getEmployeesListLoaded = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListLoaded);
export const getEmployeesListLoading = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListLoading);