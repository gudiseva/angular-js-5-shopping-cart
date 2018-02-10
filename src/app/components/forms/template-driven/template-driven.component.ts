import { Component, OnInit } from '@angular/core';
import { REGEX_PATTERNS } from '../REGEX_PATTERNS';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  emailRegex;
  
  @ViewChild('f')
  myForm: NgForm;

  constructor() {
    this.emailRegex = REGEX_PATTERNS.EMAIL;
   }

  ngOnInit() {
  }
  //save(form: NgForm) {
  save() {
    //alert('submitted');
    //console.log(form);
    //if(form.valid){
    if(this.myForm.valid){
      //console.log(form);
      console.log(this.myForm);
    }
  }

  //loadData(form: NgForm) {
  loadData() {
    const user = {
      name: 'Arvind',
      age : 41,
      email : 'a@g.co',
      contact : 9876543210,
      address : {
        city : "Blr",
        pincode : "654321"
      }
    };

    //form.setValue(user); // Actual object required
    this.myForm.setValue(user);
  }

  /*
  patchData(myform: NgForm) {
    myform.form.patchValue({'name' : 'gudiseva'});
  }
  */
  patchData() {
    this.myForm.form.patchValue({'name' : 'gudiseva'});
  }

}
