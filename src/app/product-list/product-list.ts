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

}




