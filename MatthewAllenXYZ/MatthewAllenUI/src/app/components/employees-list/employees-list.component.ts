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
  
  public personList$: Observable<Person[]>;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
    this.personList$ = this.getPersonList();
  }

  public getPersonList(personCount: number = 10): Observable<Person[]> {
    return this.personService.getPersonListByCount(personCount)
  }

}
