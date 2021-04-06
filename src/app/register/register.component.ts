import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    email: string;
    password: string;
  constructor(private userService: UserService, private router: Router, private auth: AuthService) { }

  ngOnInit() {
  }

  submit() {
    const body = {
      email: this.email,
      password: this.password
    }

    this.auth.registerUser(body).subscribe(res => {
      // this.router.navigate(['/login']);
    });
  }

  
}
