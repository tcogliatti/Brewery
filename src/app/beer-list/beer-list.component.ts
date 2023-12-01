import { Component } from '@angular/core';
import { Beer } from './Beer';
import { BeerCartService } from '../beer-cart.service';
import { BeerDataService } from '../services/beer-data.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrl: './beer-list.component.scss'
})
export class BeerListComponent {
  beers: Beer[] = [];
  sale: number;

  constructor(
    private cart: BeerCartService,
    private beersDataService: BeerDataService
  ) {
    this.sale = 0.50;
  }
  /**
   * Hook: funcion de siclo de vida del componente
   * esto se ejecuta solo cuando el componenre se renderiza
   * 
   * En este caso se suscribe al observable al renderizarse
   * y actualiza la lista de cervezas
   * 
   * WARNING: este metodo requiere que en algun momento hay que 
   * des-suscribirse para liberar memoria. El otro metodo que sería
   * usando un pipe desde el HTML no lo requiere 
   */
  ngOnInit(): void {
    this.beersDataService.gatAll()
    .subscribe(beer => this.beers = beer);
  }

  maxReached(m: string) {
    alert(m);
  }

  addToCart(beer: Beer): void {
    this.cart.addToCart(beer);
    beer.stock -= beer.quantity;
    beer.quantity = 0;
  }
}
