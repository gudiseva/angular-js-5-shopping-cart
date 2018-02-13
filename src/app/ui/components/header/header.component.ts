import { Component, OnInit } from '@angular/core';
import { MENU } from './menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems = [];

  constructor() {
    this.menuItems = MENU;
   }

  ngOnInit() {
  }

}
