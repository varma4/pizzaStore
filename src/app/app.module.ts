import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StartedComponent } from './started/started.component';
import { HomeComponent } from './home/home.component';
import { NonVegComponent } from './non-veg/non-veg.component';
import { VegComponent } from './veg/veg.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    StartedComponent,
    HomeComponent,
    NonVegComponent,
    VegComponent,
    BeveragesComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
