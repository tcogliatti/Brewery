import { Component } from '@angular/core';
import { BeerCartService } from '../beer-cart.service';
import { Beer } from '../beer-list/Beer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {
  
  cartList$: Observable<Beer[]>;

  constructor(private cart: BeerCartService){
    this.cartList$ = cart.cartList.asObservable();
  }

}
