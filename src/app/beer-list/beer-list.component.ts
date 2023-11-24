import { Component } from '@angular/core';
import { Beer } from './Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  beers: Beer[] = [ // <----------------------- mock data
    {
      name: "Bitter Call Saul",
      type: "IPA",
      price: 799,
      stock: 5,
      image: "assets/img/porter.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Red Red Wine",
      type: "Barly Wine",
      price: 599,
      stock: 4,
      image: "assets/img/porter.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Yellow Submarine",
      type: "Golden Ale",
      price: 699,
      stock: 0,
      image: "assets/img/porter.jpg",
      clearance: false,
      quantity: 0,
    },
  ];
  sale: number;

  constructor() {
    this.sale = 0.50;
  }

  upQuantity(beer: Beer): void {
    beer.stock > beer.quantity ? beer.quantity++ : null;
  }
  downQuantity(beer: Beer): void {
    beer.quantity > 0 ? beer.quantity-- : null;
  }
  changeQuantity(event: any, beer: Beer) {
    const digitPattern = /^[0-9]$/;
    if (!digitPattern.test(event.key)) 
      event.preventDefault();
  }
}
