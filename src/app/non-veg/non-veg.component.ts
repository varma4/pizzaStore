import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Product } from '../product.module';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-non-veg',
  templateUrl: './non-veg.component.html',
  styleUrls: ['./non-veg.component.css']
})
export class NonVegComponent {

  pizzaqty: number = 0
  searchText = '';
  nonveg: Product[] = []
  filteredNonVeg: Product[] = []

  constructor(private shared: SharedService,
              private actRoute: ActivatedRoute){}

  ngOnInit(): void {
      this.nonveg = this.shared.nonveggie()
      this.filterItems()
  }


  toggleButtons(product: Product) {
      product.showbuttonPizza = !product.showbuttonPizza;
      this.increment(product)
  }

  increment(product: Product) {
    if(product.qty >= 5){
      alert('max 5 ')
    }else{
      product.qty = product.qty + 1;
      this.shared.getItems(product)
    }
  }

  decrement(product : Product){
    if(product.qty <= 0){
      alert('cannot be less than 0')
    }else{
      product.qty = product.qty - 1
      this.shared.removeItems(product)
    }
  }

  filterItems(): void {
    if (!this.searchText) {
      this.filteredNonVeg = this.nonveg;
    } else {
      this.filteredNonVeg = this.nonveg.filter((item) =>
        item.item.toLowerCase().includes(this.searchText.toLowerCase())
      );
    }
  }

}
