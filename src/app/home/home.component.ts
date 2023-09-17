import { Component, OnInit } from '@angular/core';
import { Product } from '../product.module';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {


  pizza: Product[] = []
  beverage : Product[] = []

  ngOnInit(): void {}
  constructor(private shared: SharedService){
    this.pizza = this.shared.specialPizza()
    this.beverage = this.shared.specialBeverage()
  }

  toggleButtons(itemType: string, product: Product) {
    if (itemType === 'pizza') {
      product.showbuttonPizza = !product.showbuttonPizza;
      this.increment(product)
    } else if (itemType === 'beverage') {
      product.showbuttonBeverage = !product.showbuttonBeverage;
      this.increment(product);
    }
  }

  decrement(b: Product){
    if(b.qty < 0){
      alert('cannot go lessthan that')
    }else{
      b.qty = b.qty - 1
      this.shared.removeItems(b)
    }
  }
  increment(b: Product){
    if(b.qty >= 5){
      alert('max 5')

    }else{
      b.qty = b.qty + 1
      this.shared.getItems(b)
    }
  }


}
