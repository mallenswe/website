import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { catchError, filter, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeesListGuard implements CanActivate {
  constructor(private store: Store<fromStore.EmployeesState>) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkStore()
      .pipe(
        switchMap(() => of(true))
        ,catchError(() => of(false))
      );
  }

  checkStore(): Observable<boolean> {
    return this.store.select(fromStore.getEmployeesListLoaded)
      .pipe(
        tap(loaded => {
          if (!loaded) {
            this.store.dispatch(new fromStore.LoadEmployeesList(10));
          }
        })
        , filter(loaded => loaded)
        , take(1)
      )
  }

}
