import { Component, Input, input } from '@angular/core';
import { Card } from '../../models/card.model';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss',
})
export class CardsComponent {
  @Input() data!: Card;

  toggleCard = false;

  flipCard() {
    this.toggleCard = !this.toggleCard;
  }
}
