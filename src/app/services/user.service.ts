import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class UserService {

  constructor(private authService: AngularFireAuth) { }

  loginWithGoogle() {
    return this.authService.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    );
  }

  getCurrentUser(){
    return this.authService.authState;
  }

  logout(){
    this.authService.auth.signOut();
  }
}
