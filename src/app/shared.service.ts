import { Injectable } from '@angular/core';
import { Product } from './product.module';
import { Cart } from './cart.module';
@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  private cartItems: Cart[] = []

  private splpizza: Product[] = [
    {
      item : 'Indian chicken tikka',
      cost: 19.99,
      description: 'The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo',
      image: '../../assets/Peppy_Paneer.png',
      qty: 0,
      showbuttonPizza: true
    }
  ]

  private splbeverage: Product[] = [
    {
      item : 'Coco cola',
      cost: 40,
      description: 'Coca-Cola is sweet, and its sweetness comes from the use of sugar as a primary ingredient.',
      image: '../../assets/coco_cola.png',
      qty: 0,
      showbuttonPizza: true,
      showbuttonBeverage: true
    }
  ]

  private veg: Product[] = [
    {
      item : 'corn cheese',
      cost: 19.99,
      description: 'Cheese I Golden Corn | Cheese n Corn Pizza',
      image: '/assets/images/corn_cheese.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'Double cheese margherita',
      cost: 19.99,
      description: 'The ever-popular Margherita - loaded with extra cheese... oodies of it!',
      image: '/assets/images/double_cheese_margherita.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'Indian tandoori paneer',
      cost: 19.99,
      description: 'It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum I red paprika I mint mayo',
      image: '/assets/images/indiantandooripaneer.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'Margherita',
      cost: 19.99,
      description: 'A hugely popular margherita, with a deliciously tangy single cheese topping',
      image: '/assets/images/margherita.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'Paneer_makhni',
      cost: 19.99,
      description: 'Paneer and Capsicum on Makhani Sauce',
      image: '/assets/images/paneer_makhni.png',
      qty: 0,
      showbuttonPizza: true
    },


  ]
  private nonveg: Product[] = [
    {
      item : 'CHICKEN GOLDEN DELIGHT',
      cost: 19.99,
      description: 'Mmm! Barbeque chicken with a topping of golden corn loaded with extra cheese. Worth its weight in gold!',
      image: '/assets/images/corn_cheese.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'NON VEG SUPREME',
      cost: 19.99,
      description: 'Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers',
      image: '/assets/images/double_cheese_margherita.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'INDI CHICKEN TIKKA',
      cost: 19.99,
      description: 'The wholesome flavour of tandoori masala with Chicken tikka I onion I red paprika I mint mayo',
      image: '/assets/images/indiantandooripaneer.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'KEEMA DO PYAZA',
      cost: 19.99,
      description: 'Delicious minced chicken keema topped with crunchy onions on your favourite cheesy pizza',
      image: '/assets/images/margherita.png',
      qty: 0,
      showbuttonPizza: true
    },
    {
      item : 'CHICKEN PEPPERONI',
      cost: 19.99,
      description: 'A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese',
      image: '/assets/images/paneer_makhni.png',
      qty: 0,
      showbuttonPizza: true
    },


  ]

  veggie(){
    return this.veg
  }

  nonveggie(){
    return this.nonveg
  }

  specialPizza(){
    return this.splpizza
  }

  specialBeverage(){
    return this.splbeverage
  }

  getItems(cartItem : Cart){
    const itemsincart = this.cartItems.findIndex(item => cartItem.item === item.item)

    if(itemsincart !== -1){
      this.cartItems[itemsincart] = cartItem
      console.log(this.cartItems);

    }else{
      this.cartItems.push(cartItem)
      console.log(this.cartItems);
    }

  }
  removeItems(cartItem : Cart){
    const itemsincart = this.cartItems.findIndex(item => cartItem.item === item.item)

    if(itemsincart !== -1){
      if(cartItem.qty !== 0){
        this.cartItems[itemsincart] = cartItem
        console.log('removed', this.cartItems);
      }else{
        this.cartItems.splice(itemsincart, 1)
        console.log('removed totally', this.cartItems);
      }

    }else{
      console.log('removed', this.cartItems);

    }
  }

  tocart(){
    return this.cartItems
  }

  removeItemFromCart(cartItem : Cart){
    const removeItem = this.cartItems.findIndex(item => cartItem.item === item.item)

    if(removeItem !== -1){
      this.cartItems.splice(removeItem, 1)
    }
  }

  clearQty(cart: Cart){
    const vegClear = this.veg.findIndex(c => cart.item === c.item)
    const nonvegClear = this.nonveg.findIndex(c => cart.item === c.item)
    const splbeverageclear = this.splbeverage.findIndex(c => cart.item === c.item)
    const splpizzaclear = this.splpizza.findIndex(c => cart.item === c.item)
    if(vegClear !== -1){
      cart.qty = 0
    }

    if(nonvegClear !== -1){
      cart.qty = 0
    }
    if(splbeverageclear !== -1){
      cart.qty = 0
    }
    if(splpizzaclear !== -1){
      cart.qty = 0
    }
  }
}

