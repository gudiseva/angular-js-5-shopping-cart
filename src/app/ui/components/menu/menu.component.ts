import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation : ViewEncapsulation.Emulated
})
export class MenuComponent implements OnInit {

  @Input()
  menuItem = null;

  constructor() { }

  ngOnInit() {
  }

}
