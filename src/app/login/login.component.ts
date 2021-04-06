import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public email: string;
  public password: string;
  public error: string;
  data : Date = new Date();
  focus;
  focus1;
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit() {
    {
      localStorage.clear();
      var body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');

      var navbar = document.getElementsByTagName('nav')[0];
      if(navbar) {
        navbar.classList.add('navbar-transparent');
      }
  }
  }

  public submit() {
    this.auth.login(this.email, this.password)
      
      .subscribe(
        result => {
          console.log(result);
          localStorage.setItem('user', JSON.stringify(result.user));
          this.router.navigate(['todos']);
          
        },
        err => this.error = 'Could not authenticate'
      );
  }
  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');

    var navbar = document.getElementsByTagName('nav')[0];
    if(navbar) {
      navbar.classList.remove('navbar-transparent');
    }
}
}
