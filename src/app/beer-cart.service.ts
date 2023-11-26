import { Injectable } from '@angular/core';
import { Beer } from './beer-list/Beer';
import { BehaviorSubject } from 'rxjs';

/**
 * Maneja la logica del carrito
 */
@Injectable({ providedIn: 'root' })
export class BeerCartService {
  
  // cartList encapsula en el Behavior Subject el valor 
  // de _cartList para emitirlo ante eventos de cambio
  private _carlist: Beer[] = [];
  cartList: BehaviorSubject<Beer[]> = new BehaviorSubject(this._carlist);

  constructor() {
  }

  addToCart(beer: Beer) {
    let item: Beer | undefined = this._carlist.find((cerve) => cerve.name == beer.name);
    if (!item)
      this._carlist.push({ ... beer }) // copia el objeto
    else
      item.quantity += beer.quantity;

    this.cartList.next(this._carlist); // emitir evento
  }

}
