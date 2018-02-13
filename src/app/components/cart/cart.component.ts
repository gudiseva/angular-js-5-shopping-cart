import { Component, OnInit, Input} from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input()
  cartItems = [];
  private cartService$ = null;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartItems = this.cartService.cartList;
    
    this.cartService$ = this.cartService.cartObservable$
    .subscribe(
      (data) => {
        console.log('new data received');
        this.cartItems = <any[]>data;
      }
    );
  }

  ngOnDestroy() {
    this.cartService$.unsubscribe();
  }

}
