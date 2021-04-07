import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonFinderComponent } from './components/person-finder/person-finder.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Personfinder', component: PersonFinderComponent},
  {path: 'Employees', loadChildren: () => import('./components/employees-list/employees-list.module').then(employeesListModule => employeesListModule.EmployeesListModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
