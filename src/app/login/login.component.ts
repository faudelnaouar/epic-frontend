import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
  public email: string;
  public password: string;
  public error: string;

  constructor(private auth: AuthService, private router: Router) { }

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
}
