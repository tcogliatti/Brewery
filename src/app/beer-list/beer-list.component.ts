import { Component } from '@angular/core';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  beer = {
    "nombre": "Negra Juerte",
    "tipo": "Porter",
    "precio": 899,
    "stock": 5,
    "image": "assets/img/porter.jpg"
  }
  constructor() {}

}
