import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductCart } from '../product-cart';
import { Product } from '../product-list/Product';

@Component({
  selector: 'app-shop-cart',
  standalone: false,
  templateUrl: './shop-cart.html',
  styleUrl: './shop-cart.scss'
})
export class ShopCart {

  cartList$: Observable<Product[]>;
  constructor(private cart: ProductCart){
    this.cartList$ = cart.cartList.asObservable();
  }
}
