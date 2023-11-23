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
    },
    {
      name: "Red Red Wine",
      type: "Barly Wine",
      price: 599,
      stock: 4,
      image: "assets/img/porter.jpg",
      clearance: false,
    },
    {
      name: "Yellow Submarine",
      type: "Golden Ale",
      price: 699,
      stock: 0,
      image: "assets/img/porter.jpg",
      clearance: false,
    },
  ];
  sale: number;

  constructor() {
    this.sale = 0.50;
   }

}
