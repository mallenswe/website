import { Component } from '@angular/core';
import { ColorChangerService } from './services/color-changer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Matthew Allen';
  public showPersonFinder: boolean = false;

  constructor(
    private colorChangerService: ColorChangerService
  ) {}

  public changeColor() {
    this.colorChangerService.getColor().subscribe((color:Array<string>) => {
      const highlightCard = document.getElementById('title-card');
      const commaSeperatedColor = color.join(',');
      highlightCard.style.backgroundColor = `rgb(${commaSeperatedColor})`;
    })
  }
}
