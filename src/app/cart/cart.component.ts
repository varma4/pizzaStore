import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Cart } from '../cart.module';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  cartItems: Cart[] = []

  constructor(private shared: SharedService){}

  ngOnInit(): void {
      this.cartItems = this.shared.tocart()
  }

  remove(p : Cart){
    this.shared.removeItemFromCart(p)
    this.shared.clearQty(p)
  }


}
