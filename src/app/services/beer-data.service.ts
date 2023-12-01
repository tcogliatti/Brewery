import { Injectable } from '@angular/core';
import { Beer } from '../beer-list/Beer';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';

const URL: String = 'http://localhost:8080/api/';

@Injectable({
  providedIn: 'root'
})
export class BeerDataService {
  beers: Beer[] = [ // <----------------------- mock data
    {
      name: "Bitter Call Saul",
      type: {
        id: 21,
        type: "IPA"
      },
      price: 799,
      stock: 5,
      image: "assets/img/porter.jpg",
      clearance: true,
      quantity: 0,
    },
    {
      name: "Red Red Wine",
      type: {
        id: 22,
        type: "Barly Wine"
      },
      price: 599,
      stock: 4,
      image: "assets/img/porter.jpg",
      clearance: false,
      quantity: 0,
    },
    {
      name: "Yellow Submarine",
      type: {
        id: 23,
        type: "Golden Ale"
      },
      price: 699,
      stock: 0,
      image: "assets/img/porter.jpg",
      clearance: false,
      quantity: 0,
    },
  ];

  constructor(private http: HttpClient) { }
/** 
 * esto devuelve un observable del arreglo con las cervezas
 * para que el que obtiene el resultado pueda suscribirse 
 * al mismo y reaccionar cada vez que el valor cambie
 * 
 * @returns Observable<Beer[]>
 * ojo con el tema del casteo <Beer[]>
 * es importante decirel al observable que sepa el tipo de dato que observa
 * lo mismo el http.get, que desconoce el tipo de dato que obtendrá
 * */ 
  public gatAll(): Observable<Beer[]> {
    return this.http.get<Beer[]>(URL+'beer')
      .pipe( // cambiamos los datos del observable para agregar el dato quantity
        tap( (beers: Beer[]) => { // similar a map
          beers.forEach(beer => beer.quantity = 0);
        })
      );  
  }
}
