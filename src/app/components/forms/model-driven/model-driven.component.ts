import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { REGEX_PATTERNS } from '../REGEX_PATTERNS';
import { FormModel } from './models';
import { AjaxCallsService } from '../../../services/ajax-calls.service';

@Component({
  selector: 'app-model-driven',
  templateUrl: './model-driven.component.html',
  styleUrls: ['./model-driven.component.css'],
  providers: [AjaxCallsService]
})
export class ModelDrivenComponent implements OnInit {

  userForm: FormGroup = null;


  constructor(private formService: AjaxCallsService) {
    this.initializeForm();
   }

  ngOnInit() {  }

  initializeForm() {
    /*
    this.userForm = new FormGroup({
      name : new FormControl(null, [Validators.required, Validators.minLength(5)]),
      age : new FormControl(null, [Validators.required, Validators.min(18)]),
      email : new FormControl(null,
              [Validators.required, Validators.pattern(REGEX_PATTERNS.EMAIL)]),
      contact : new FormControl(null, [Validators.required])
    });
    */
   this.userForm = FormModel();
  }

  saveData() {
    this.formService.addFormData(this.userForm.value)
    .subscribe(
      (data) => console.log(data),
      (err) => console.error(err)
    );
  }

}
