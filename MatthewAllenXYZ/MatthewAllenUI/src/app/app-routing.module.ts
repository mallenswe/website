import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PersonFinderComponent } from './components/person-finder/person-finder.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

const routes: Routes = [
  {path: 'Personfinder', component: PersonFinderComponent},
  {path: 'Employees', component: EmployeesListComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
