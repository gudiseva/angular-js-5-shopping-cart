import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css']
})
export class DynamicFormsComponent implements OnInit {

  formData: FormGroup = null;
  
  constructor() {
    this.initializeForm();
   }

  ngOnInit() {
  }

  initializeForm(){
    this.formData = new FormGroup ({
      name : new FormControl(),
      email : new FormControl(),
      addresses : new FormArray([
        this.addAddress()
      ])
    });
  }

  addAddress() {
    return new FormGroup({
      city: new FormControl(),
      pincode: new FormControl()
    });
  }

  addNewAddress() {
    const address = <FormArray>this.formData.controls['addresses'];
    address.push(this.addAddress());
  }

  removeAddress(index: number) {
    const address = <FormArray> this.formData.controls['addresses'];
    address.removeAt(index);
  }

  /*
  addNewName() {
    const name = this.formData.controls['name'];
    address.push(this.addAddress());
  }
  */
 public get addressObj(): FormArray {
   return <FormArray>this.formData.controls['addresses'];
 }

}
