import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forms-container',
  templateUrl: './forms-container.component.html',
  styleUrls: ['./forms-container.component.css']
})
export class FormsContainerComponent implements OnInit {

  router$ = null;
  username = null;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.router$ = this.activatedRoute.params.subscribe(
      (par) => this.username = par['name']
    );
  }

  ngOnDestroy() {
    this.router$.unsubscribe();
  }

}
