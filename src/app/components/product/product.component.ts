import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product = null;

  @Output()
  addItem = new EventEmitter();

  @Input()
  ccode = environment.currency;
  constructor() { }

  ngOnInit() {
  }
  addToCart() {
    this.addItem.emit( { data: this.product } );
  }

}
