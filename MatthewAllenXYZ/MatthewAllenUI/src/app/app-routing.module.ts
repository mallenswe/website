import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PersonFinderComponent } from './components/person-finder/person-finder.component';

const routes: Routes = [
  {path: 'personfinder', component: PersonFinderComponent},
  // {path: '', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
