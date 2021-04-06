import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  baseUrl = 'http://localhost:5000/'
  constructor(private http: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'users/login', {email: email, password: password})
      
  }

  registerUser(body): Observable<any> {
    return this.http.post<any>(this.baseUrl +'users/add_user', body);
  }

  logout() {
    localStorage.removeItem('access_token');
  }

  public get loggedIn(): boolean {
    return (localStorage.getItem('user') !== null);
  }
}
