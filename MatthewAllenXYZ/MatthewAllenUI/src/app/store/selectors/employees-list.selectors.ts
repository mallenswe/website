import { createSelector } from '@ngrx/store';
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

export const getEmployeesList = createSelector(getEmployeesListEntities, getEmployeesListFilter, getEmployeesListSort, (entities, filterData, sort) => {
    // console.log('getEmployeesList entities: ', entities);
    const dataMap = Object.keys(entities).map(businessEntityId => entities[parseInt(businessEntityId, 10)]);
    // console.log(' dataMap: ', dataMap);
    // console.log('getEmployeesListSort Sort: ', sort);
    // console.log(' filterData: ', filterData, Object.keys(filterData).length);
    if(sort.property) {
        // console.log('selector sort: ', sort);
        dataMap.sort((a,b) => {
            // console.log('sorting a: ', a[sort.property], ' b: ', b[sort.property], ' asc: ', (a[sort.property] > b[sort.property]));
            switch(sort.value) {
                case 'asc': {
                   if(a[sort.property] < b[sort.property]) {
                       return -1
                   } else {
                       return 1
                   }
                }
                case 'desc': {
                    if(a[sort.property] > b[sort.property]) {
                        return -1
                    } else {
                        return 1
                    }
                }
                case 'neutral':
                default: {
                    return 0;
                }
            }
        })
    }
    
    if (!Object.keys(filterData).length) return dataMap;
    else {
        const filteredData = dataMap.filter(person => {
            let filterMatch = true;
            for (let property in filterData) {
                // console.log('dataMap.filter proprty in filterData: ', property, ' person[property]: ', person[property]);
                if ((person[property] as string).toLowerCase().includes((filterData[property] as string).toLowerCase())) {
                    continue;
                } else {
                    filterMatch = false;
                    return;
                }
            }
            return filterMatch ? person : null;
        });
        return filteredData;
    }


});


