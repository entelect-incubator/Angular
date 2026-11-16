import { Component, inject } from '@angular/core';
import { PizzaCardComponent } from './features/catalogue/pizza-card/pizza-card';
import { PizzaCatalogService } from './features/catalogue/pizza-catalog.service';
import { Pizza } from './features/catalogue/pizza';

@Component({
  selector: 'app-root',
  imports: [PizzaCardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private readonly pizzaCatalog = inject(PizzaCatalogService);
  protected readonly pizzas = this.pizzaCatalog.getPizzas();
  protected addedMessage = '';

  protected addToBasket(pizza: Pizza): void {
    this.addedMessage = `${pizza.name} added to your basket.`;
  }
}
