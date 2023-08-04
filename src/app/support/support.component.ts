import { Component, inject } from '@angular/core';
import { DataService } from '../data.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Help } from '../Interface/Help';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.css']
})
export class SupportComponent {
  // invalidCredentials:boolean=false;
  help:Help={} as Help;
  // registerUser:[]=[];
  query:Help[]=[];
 // ticketId:number=0;
  success:boolean=false;
 // data:DataService=inject(DataService);
  queryForm=new FormGroup({
    //Using validators and creating form fields and using prefilled values during launch
    name:new FormControl('',[Validators.required,Validators.email]),
    contact:new FormControl('',[Validators.required,Validators.minLength(10)]),
    message:new FormControl('',[Validators.required,Validators.minLength(1)]),
});
  constructor(private data:DataService){}
  submit(name:string,contact:string,message:string){
    const ticketId=this.data.getTicketId();
    this.help={ticketId,name,contact,message};
    this.success=true;
    this.data.addHelp(this.help);
  }
    get user(){
      return this.queryForm.get('user');
    }
    get contact(){
      return this.queryForm.get('contact');
    }
    get message(){
      return this.queryForm.get('message');
    }
}
