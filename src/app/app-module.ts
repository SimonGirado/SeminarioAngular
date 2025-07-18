import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { App } from './app';
import { AppRoutingModule } from './app-routing-module';
import { ProductList } from './product-list/product-list';
import { ShopAbout } from './shop-about/shop-about';
import { ShopCart } from './shop-cart/shop-cart';
import { ShopProducts } from './shop-products/shop-products';
import { InputInteger } from './input-integer/input-integer';


@NgModule({
  declarations: [
    App,
    ProductList,
    ShopAbout,
    ShopProducts,
    ShopCart,
    InputInteger,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
