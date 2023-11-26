import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Beer } from '../beer-list/Beer';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  // Two-Way data binding between components
  @Input()
  quantity: number = NaN;
  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  // recibe info del padre
  @Input()
  max: number = NaN;

  // emite info al padre
  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  constructor() {

  }

  upQuantity(): void {
    if (!isNaN(this.quantity)) {
      if (this.max > this.quantity) {
        this.quantity++;
        this.quantityChange.emit(this.quantity); // Two-Way comunication between components
      } else
        this.maxReached.emit("Se alcanzo el maximo");
    }
  }

  downQuantity(): void {
    this.quantity > 0 ? this.quantity-- : null;
    this.quantityChange.emit(this.quantity); // Two-Way comunication between components
  }
  changeQuantity(event: any) {
    const digitPattern = /^[0-9]$/;
    if (!digitPattern.test(event.key))
      event.preventDefault();
    this.quantityChange.emit(this.quantity); // Two-Way comunication between components
  }
}
