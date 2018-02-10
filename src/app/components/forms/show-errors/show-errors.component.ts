import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-show-errors',
  templateUrl: './show-errors.component.html',
  styleUrls: ['./show-errors.component.css']
})
export class ShowErrorsComponent {

  private static readonly errorMessages = {
    'required' : () => 'This field is required',
    'minlength' : (params) => 'min number of characters is ' + params.requiredLength,
    'maxlength' : (params) => 'max allowed number of characters us ' + params.requiredLength,
    'pattern' : (params) => 'please enter a valid format',
    'email' : () => 'invalid email format',
    'zipCode' : (params) => 'valid zip code is ' + params['code'],
    'min' : (params) => 'min value should be ' + params['min'],
    'max' : (params) => 'max value should be ' + params['max']
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control && this.control.errors &&
    (this.control.dirty || this.control.touched); 
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any){
    return ShowErrorsComponent.errorMessages[type](params);
  }
 
}
