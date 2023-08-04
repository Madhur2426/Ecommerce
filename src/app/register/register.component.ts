import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { User } from '../Interface/User';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  invalidCredentials:boolean=false;
  //registerUser:[]=[];
  success:boolean=false;
  //data:DataService=inject(DataService);


  url="http://localhost:8080/User/add"
  registerUser:User={}as User;
  constructor(private data:DataService){}
  registerForm=new FormGroup({
    //Using validators and creating form fields and using prefilled values during launch
    user:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(5)]),
})
  register():void{
    // this.data.registerUser(this.registerForm);
    // this.registerUser=this.data.getRegisteredUsers();
    // this.success=true;
    const data={
      username:this.registerForm.value.user!,
      password:this.registerForm.value.password!
    };
    this.success=true;
    this.data.postData(this.url,data).subscribe((result: any)=>{
      console.log(result);
      if(result.status===200)
       console.log("Registered Successfully",result.status);
       else 
         console.log("Registration was not successfull",result.status);
    },
      (    error:HttpErrorResponse)=>{
      console.error(error);
    }
    
    );
   // console.log(this.registerForm.value);
  }
  
    get user(){
      return this.registerForm.get('user');
    }
    get password(){
      return this.registerForm.get('password');
    }
}
