import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from './login';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private auth: AuthService) {}
  submitted = false;
  login = new Login();

  ngOnInit() {}

  public onLoginClick() {
    this.auth.sendToken(this.login.email);
    this.router.navigate(['../dashboard']);
  }

  signIn(credential) {
     const isUsername = this.login.email === 'admin' ? true : false;
     const isPassword = this.login.password === 'admin' ? true : false;
    //const isUsername = this.login.email === 'admin' ? true : false;
    //const isPassword = this.login.password === 'admin' ? true : false;
     if (isUsername && isPassword) {
       this.onLoginClick();
     } else {
       this.submitted = true;
     }
this.auth.login(credential);
  }
}
