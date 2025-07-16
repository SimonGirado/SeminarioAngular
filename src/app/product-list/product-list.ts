import { Component } from '@angular/core';
import { Product } from './Product';
@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  products: Product[] =
  [
    {
    "nombre" : "Bolson XXL",
    precio : 50000,
    tipo : "Variado",
    stock : 0,
    cantidad: 0
  },
      {
    "nombre" : "Bolson Secreto",
    precio : 35000,
    tipo : "Misterioso",
    stock : 0,
    cantidad: 0
  },
      {
    "nombre" : "Bolson Remeras",
    precio : 34000,
    tipo : "Remeras",
    stock : 3,
    cantidad: 0
  },
      {
    nombre : "Bolson Pantalones",
    precio : 40000,
    tipo : "Pantalones",
    stock : 7,
    cantidad: 0
  }
  ]

  upCantidad(product: Product): void
{
  if(product.stock>product.cantidad)
  product.cantidad++

}
  downCantidad(product: Product): void
{
  if(product.cantidad >0)
  product.cantidad--

}
onCambiarCantidad(event: any, product: Product): void {
  const input = event.target.value;

  const soloNumeros = input.replace(/[^0-9]/g, '');

  let cantidad = soloNumeros ? parseInt(soloNumeros, 10) : 0;

  if (cantidad > product.stock) {
    cantidad = product.stock;
  }

  //product.cantidad = cantidad;

  event.target.value = cantidad;
}

}

