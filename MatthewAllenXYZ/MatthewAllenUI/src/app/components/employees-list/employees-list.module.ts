import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { effects, reducers } from '../../store';

// services
import * as fromServices from '../../services';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesListComponent } from './employees-list.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { EmployeesListGuard } from './employees-list.guard';
import { DragDropTableComponent } from 'src/app/presentation/drag-drop-table/drag-drop-table.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export const ROUTES: Routes = [
  {
    path: '',
    canActivate: [EmployeesListGuard],
    component: EmployeesListComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forChild(ROUTES),
    StoreModule.forFeature('employees', reducers),
    EffectsModule.forFeature(effects),
    DragDropModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [fromServices.EmployeeService],
  declarations: [EmployeesListComponent, DragDropTableComponent],
  exports: [EmployeesListComponent, DragDropTableComponent]
})
export class EmployeesListModule { }
