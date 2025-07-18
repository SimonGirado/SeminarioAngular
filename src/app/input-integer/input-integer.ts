import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {
  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter<number>();

upCantidad(): void
{
  if(this.max>this.cantidad){
  this.cantidad++
  this.cantidadChange.emit(this.cantidad);
  }
}
  downCantidad(): void
{
  if(this.cantidad >0){
  this.cantidad--
  this.cantidadChange.emit(this.cantidad);

  }
}
onCambiarCantidad(event: any): void {
    this.cantidadChange.emit(this.cantidad);

  /*const input = event.target.value;

  const soloNumeros = input.replace(/[^0-9]/g, '');

  let cantidad = soloNumeros ? parseInt(soloNumeros, 10) : 0;

  if (cantidad > product.stock) {
    cantidad = product.stock;
  }

  //product.cantidad = cantidad;

  event.target.value = cantidad;
}*/
}
}