import { createSelector } from '@ngrx/store';
import { Person } from 'src/app/models/person.model';
import * as fromFeature from '../reducers';
import * as fromEmployeesList from '../reducers/employees-list.reducer';

export const getEmployeesListState = createSelector(fromFeature.getEmployeesState, (state: fromFeature.EmployeesState) => {
    return state.employeesList
});

export const getEmployeesListLoaded = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListLoaded);
export const getEmployeesListLoading = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListLoading);
export const getEmployeesListFilter = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListFilter);
export const getEmployeesListSort = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListSort);

export const getEmployeesListEntities = createSelector(getEmployeesListState, fromEmployeesList.getEmployeesListEntities);

export const getEmployeesList = createSelector(getEmployeesListEntities, getEmployeesListFilter, getEmployeesListSort, (entities, filter, sort) => {
    const dataMap = Object.keys(entities).map(businessEntityId => entities[parseInt(businessEntityId, 10)]);

    let filteredData: Person[];

    if (Object.keys(filter).length) {
        filteredData = dataMap.filter(person => {
            let filterMatch = true;
            for (let property in filter) {
                if ((person[property] as string).toLowerCase().includes((filter[property] as string).toLowerCase())) {
                    continue;
                } else {
                    filterMatch = false;
                    return;
                }
            }
            return filterMatch ? person : null;
        });
    } else {
        filteredData = dataMap;
    }

    if (sort.property) {
        let compareFunction: Function;
        switch (sort.value) {
            case 'asc': {
                compareFunction = (a,b) => {
                    if (a[sort.property] < b[sort.property]) {
                        return -1
                    } else {
                        return 1
                    }
                }
                break;
            }
            case 'desc': {
                compareFunction = (a,b) => {
                    if (a[sort.property] > b[sort.property]) {
                        return -1
                    } else {
                        return 1
                    }
                };
                break;
            }
            case 'neutral':
            default: {
                compareFunction = (a,b) => {
                    return 0;
                }
                break;
            }
        }
        filteredData.sort((a,b) => compareFunction(a, b));
    }

    return filteredData;


});


