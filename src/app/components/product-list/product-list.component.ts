import { Component, OnInit, Input } from '@angular/core';
import { products } from './products';
import { Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  //productData = null;
  productList = null;
  
  @Output()
  addtocart = new EventEmitter();

  @Input()
  code = null;
  data = true;
  pageno = 0;

  //constructor() {
  constructor(private cartService: CartService) {
    this.productList = products;
    //this.productList = _.filter(products, {productStock: true});
    // --- OR ---
    //this.productList = _.filter(products, (p) => p.productStock === true); // === matches both value and data type
    // --- OR ---
    //this.productList = _.filter(products, (p) => p['productStock'] === true);

    /*
    this.productData = {
      productName : 'Product 1',
      productCost : 15000,
      productId : 100,
      productStock : true,
      productImage : 'http://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/YU_Yureka_2/YU_Yureka_2_L_1.jpg'
    };
    */
   
   }

   ngOnChanges(changes: any){
     console.log(changes);
   }

  ngOnInit() {
  }
  addItem(e){
    //console.log(e);
    //this.addtocart.emit( { data : e.data } );
    this.cartService.addToCart(e.data);
  }
  changePage(t){
    if(t === 'n') {
      ++this.pageno;
    } else {
      --this.pageno;
    }
  }
 
}
