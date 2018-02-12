import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {

  private _cartList = []; // _ is for private members
  private cartData = new Subject();
  cartObservable$ = this.cartData.asObservable();

  constructor() { }

  addToCart(product) {
    //this.cartList.push
    this._cartList = [...this._cartList, product]; // ... is Ecma convention for previous object
      // keep the above immutable
    this.cartData.next(this._cartList);
  }

  public get cartList() {
    return this._cartList;
  }

}
