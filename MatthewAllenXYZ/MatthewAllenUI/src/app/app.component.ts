import { Component, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ColorChangerService } from './services/color-changer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnDestroy {
  title: string = 'Matthew Allen';
  public showPersonFinder: boolean = false;
  public colorChangeSubscription: Subscription;

  constructor(
    private colorChangerService: ColorChangerService
  ) { }

  public changeColor() {
    this.colorChangeSubscription = this.colorChangerService.getColor().subscribe((color: Array<string>) => {
      const highlightCard = document.getElementById('title-card');
      const commaSeperatedColor = color.join(',');
      highlightCard.style.backgroundColor = `rgb(${commaSeperatedColor})`;
    })
  }

  ngOnDestroy(): void {
    this.colorChangeSubscription.unsubscribe();
  }
}
