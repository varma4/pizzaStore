import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartedComponent } from './started/started.component';
import { HomeComponent } from './home/home.component';
import { VegComponent } from './veg/veg.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path: '', component: StartedComponent},
  {path: 'search/:searchId', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'veg', component: VegComponent},
  {path: 'non-veg', component: NonVegComponent},
  {path: 'beverages', component: BeveragesComponent},
  {path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
