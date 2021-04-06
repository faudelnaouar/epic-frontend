import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = 'http://localhost:5000/';
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(this.baseUrl + '/users/all');
  }

  login(body): Observable<any> {
    return this.http.post<any>('/users/login', body);
  }

  
  registerUser(body): Observable<any> {
    return this.http.post<any>(this.baseUrl +'/users/add_user', body);
  }
}
