import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'in28minutes';
  password = '';
  errorMessage = 'Invalid Credential';
  invalidLogin = false;

  //Router
  //Angular.giveMeRouter
  //Dependency Injection

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin() {
    //console.log(this.username)
    if (this.username === 'in28minutes' && this.password === 'dummy') {
      //Redicrect to welcome page
      this.router.navigate(['welcome', this.username]);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }
}
