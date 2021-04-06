import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodoService } from './todo.service';
import { UserService } from './user.service';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './register/register.component';
//import {InputTextModule} from 'primeng/inputtext';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
import { UploadfileComponent } from './uploadfile/uploadfile.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgressComponent } from './progress/progress.component';
//import {TableModule} from 'primeng/table';
@NgModule({
  declarations: [ 
    AppComponent,
    TodoListComponent,
    UserListComponent,
    LoginComponent,
    RegisterComponent,
    UploadfileComponent,
    NavbarComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // JwtModule.forRoot({
    //   config: {
    //     tokenGetter: tokenGetter,
    //     whitelistedDomains: ['localhost:5000'],
    //     blacklistedRoutes: ['localhost:5000/users/login']
    //   }
    // })
    
  ],
  providers: [
    TodoService,
    UserService,
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
