import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductCart {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject<Product[]> = new BehaviorSubject(this._cartList);

  addToCart(product: Product) {
    let item: Product | undefined = this._cartList.find((v1) => v1.nombre == product.nombre)
    if(!item){
      this._cartList.push({ ... product});
    } else {
      item.cantidad += product.cantidad;
    }
    this.cartList.next(this._cartList);
  }

  constructor() { }
}
