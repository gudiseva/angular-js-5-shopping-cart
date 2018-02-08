import { Component, OnInit, Input } from '@angular/core';
import { products } from './products';
import { Output, EventEmitter } from '@angular/core';

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

  constructor() {
    this.productList = products;
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

  ngOnInit() {
  }
  addItem(e){
    //console.log(e);
    this.addtocart.emit( { data : e.data } );
  }
 
}
