import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { Product } from '../product.module';
@Component({
  selector: 'app-veg',
  templateUrl: './veg.component.html',
  styleUrls: ['./veg.component.css']
})
export class VegComponent implements OnInit{
  veg: Product[] = []
  filteredVeg: Product[] = []
  searchText = ''
  constructor(private shared: SharedService){}

  ngOnInit(): void {
      this.veg = this.shared.veggie()
      this.filterItems()
  }

  togglebutton(product: Product){
    product.showbuttonPizza = !product.showbuttonPizza
    this.increment(product)
  }

  decrement(product: Product){
    if(product.qty <= 0){
      alert('cannot be less than that');
    }else{
      product.qty = product.qty - 1;
      this.shared.removeItems(product)
    }
  }

  increment(product: Product){
    if(product.qty >= 5){
      alert('max 5')
    }else{
      product.qty = product.qty + 1
      this.shared.getItems(product)
    }
  }

  filterItems(): void {
    if (!this.searchText) {
      this.filteredVeg = this.veg;
    } else {
      this.filteredVeg = this.veg.filter((item) =>
        item.item.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

}
