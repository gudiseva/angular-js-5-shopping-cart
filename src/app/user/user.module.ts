import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoginComponent
  ],
  exports: [LoginComponent],
  providers: [UserService]
})
export class UserModule { }
