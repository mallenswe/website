import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, switchMap } from "rxjs/operators";
import { Person } from "src/app/models/person.model";
import { PersonService } from "src/app/services/person.service";
import { environment } from "src/environments/environment";
import * as fromApp from '../../../store/app.reducer'
import * as EmployeeListActions from './employeeList.action';



@Injectable()
export class EmployeeListEffects {
    private URL = environment.baseURL;
    private EmployeeController = environment.personController;
    private employeeListURL = `${this.URL}/${this.EmployeeController}/GetEmployeeList?employeeAmount=`;

    @Effect()
    getEmployeeList = this.actions$.pipe(
        ofType(EmployeeListActions.GET_EMPLOYEES),
        switchMap((payload) => {
            return ''
            // this.personService.getEmployeeListByCount(payload.employeeAmount)
        }),
        map(employeeList => {
            // return new EmployeeListActions.SetEmployees(employeeList);
        })
    )



    constructor(
        private actions$: Actions,
        private personService: PersonService
    ) {

    }
    
}