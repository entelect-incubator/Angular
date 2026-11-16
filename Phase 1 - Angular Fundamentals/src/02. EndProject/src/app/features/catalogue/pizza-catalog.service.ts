import { Injectable } from '@angular/core';
import { Pizza } from './pizza';

const PIZZAS: Pizza[] = [
  {
    id: 1,
    name: 'Margherita',
    description: 'A timeless classic, made for sharing.',
    ingredients: 'Tomato · fior di latte · basil',
    price: 119,
    label: 'The classic',
  },
  {
    id: 2,
    name: 'The Sunday',
    description: 'A little smoky, a little sweet.',
    ingredients: 'Tomato · mozzarella · roasted pepper',
    price: 145,
    label: 'A favourite',
  },
  {
    id: 3,
    name: 'Garden Party',
    description: 'Fresh from the garden, straight to the table.',
    ingredients: 'Tomato · mozzarella · artichoke · olive',
    price: 139,
    label: 'Garden fresh',
  },
];

@Injectable({ providedIn: 'root' })
export class PizzaCatalogService {
  getPizzas(): Pizza[] {
    return PIZZAS.map((pizza) => ({ ...pizza }));
  }
}
