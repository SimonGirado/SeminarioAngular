import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss'
})
export class ProductList {
  product = {
    "nombre" : "Producto1",
    "precio" : "$200",
    "tipo" : "raro",
    "stock" : "3"
  }
}
