import { Component, input, output } from '@angular/core';
import { Pizza } from '../pizza';

@Component({
  selector: 'app-pizza-card',
  templateUrl: './pizza-card.html',
  styleUrl: './pizza-card.scss',
})
export class PizzaCardComponent {
  readonly pizza = input.required<Pizza>();
  readonly add = output<Pizza>();
}
