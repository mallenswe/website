import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person.model';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-person-finder',
  templateUrl: './person-finder.component.html',
  styleUrls: ['./person-finder.component.scss']
})
export class PersonFinderComponent implements OnInit {
  public searchedPerson: Person;
  public findBusinessEntityID: number;

  constructor(
    private personService: PersonService
  ) { }

  ngOnInit(): void {
  }

  public findPerson(event): void {
    this.personService.getPersonByBusinessEntityID(this.findBusinessEntityID).subscribe((person: Person) => {
      this.searchedPerson = person;
    })
  }

}
