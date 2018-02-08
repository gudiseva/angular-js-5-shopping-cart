import { Component } from '@angular/core';
import { products } from './components/product-list/products';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'app';
  //cartData = products;
  cartData = [];
  currency = environment.currency;

  addToCart(e) {
    this.cartData.push(e.data);
  }

  getCurrency(e){
    this.currency = e.data;
  }
}
