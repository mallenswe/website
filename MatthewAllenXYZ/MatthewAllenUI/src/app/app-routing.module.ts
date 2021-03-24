import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonFinderComponent } from './components/person-finder/person-finder.component';

const routes: Routes = [
  {path: 'Personfinder', component: PersonFinderComponent},
  {path: 'Employees', component: PersonFinderComponent},
  {path: '', redirectTo: '/', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
