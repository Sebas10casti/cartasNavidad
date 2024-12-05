import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardsComponent } from './components/cards/cards.component';
import { ITEMS } from './items';
import { Card } from './models/card.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  get items(): Card[] {
    return ITEMS;
  }

  toggleCard = false;
}
