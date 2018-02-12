import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loggedIn = false;
  constructor(private userService: UserService) { }

  ngOnInit() {
    /*
    console.log(this.userService.getCurrentUser());
    if(!this.userService.getCurrentUser()){
      this.loggedIn = true;
    }
    */
   this.userService.getCurrentUser().subscribe(
    (data) => {
      console.log(data);
      this.loggedIn = !!data;
    }
   );
  }

  login() {
    this.userService.loginWithGoogle().then(
      (data) => {
        this.loggedIn = !!data;
        console.log(data);
      },
      (err) => console.log(err)
    );
  }

  logout(){
    this.userService.logout();
    this.loggedIn = !true;
  }

}
