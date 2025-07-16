import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopAbout } from './shop-about/shop-about';
import { ShopProducts } from './shop-products/shop-products';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'product',
    component: ShopProducts
  },
  {
  path: 'about',
  component: ShopAbout
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
