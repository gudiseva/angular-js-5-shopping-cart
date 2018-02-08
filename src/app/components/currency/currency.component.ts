import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  currencies = [];

  @Output()
  selected = new EventEmitter();

  constructor() { 
    this.currencies = ['INR', 'USD', 'EUR', 'GBP', 'CAD'];
  }

  ngOnInit() {
  }

  changeCurrency(value) {
    this.selected.emit({ data: value });
  }

}
