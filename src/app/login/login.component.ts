import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { DataService } from '../data.service';
import { User } from '../Interface/User';
import { Subscription } from 'rxjs';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // data:DataService=inject(DataService);
  //invalidCredentials:boolean=false;
  users: any[] = [];
  Credentials: boolean = false;


  isValid: boolean = false;
  Users: User = {} as User;
  url = "http://localhost:8080/User/login"
  loginForm = new FormGroup({
    //Using validators and creating form fields and using prefilled values during launch
    user: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  })
  constructor(private router: Router, private data: DataService) { }
  loginUser() {
    //   this.users=this.data.getRegisteredUsers();
    //   const username = this.loginForm.value.user;//accessing the value of the user 
    //     const password = this.loginForm.value.password;//accessing the value of the password
    //   for(let i=0;i<=this.users.length;i++){
    //     //checking for correct username and password
    //     if(username==this.users[i]&&password==this.users[i+1]){
    //     this.router.navigate(['home']);//navigating to home page
    //     }
    //   }
    //  this.invalidCredentials=true;//if login credentials are wrong
    let invalidCredentials: any;
    const body = {
      username: this.loginForm.value.user!,
      password: this.loginForm.value.password!
    };
    invalidCredentials = this.data.login(this.url, body).subscribe((result: any) => {
      console.log(result);
      if (result.status === 200) {
        this.router.navigate(['home']);
        this.isValid = true;
      }
      else {
        this.isValid = false;
        this.Credentials = true;
        console.log(this.Credentials);
        console.log("response.status-->", result.status);
      }
      this.data.isLoggedIn(this.isValid);
    },
      (error: any) => {
        this.Credentials=true;
        console.error(error);
      }
    );
  }

  get user() {
    return this.loginForm.get('user');
  }
  get password() {
    return this.loginForm.get('password');
  }
}
