import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.scss']
})
export class EmployeesListComponent implements OnInit {
  
  public employeeList$: Observable<Person[]>;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.employeeList$ = this.getEmployeeList();
  }

  public getEmployeeList(personCount: number = 10): Observable<Person[]> {
    return this.personService.getEmployeeListByCount(personCount)
  }

}
