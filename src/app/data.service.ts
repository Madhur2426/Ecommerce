import { Injectable } from '@angular/core';
import {Mobile} from './Interface/Mobile'
import { FormGroup } from '@angular/forms';
import { Help } from './Interface/Help';
import { HttpClient } from '@angular/common/http';
import { User } from './Interface/User';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  registerUsers:any[]=[];
  cart:Mobile[]=[];
  support:Help[]=[];
  totalItems:number=0;
  ticketNumber: number=0;
  mobileData:Mobile[]=[];

  verify:boolean=false;
  getMobileDataURL:string="http://localhost:8080/Mobile/get"
  constructor(private http:HttpClient) { }
  // getUserData(){
  //   return this.http.get(this.url);
  // }
  postData(url:string,data:any){
    return this.http.post(url,data,{observe:'response',responseType:'text'})
  }
  login(url:string,data:User){
    return this.http.post(url,data,
  {observe:'response',responseType:'text'});
  }
  registerUser(formData: FormGroup){
    this.registerUsers.push(formData.value.user,formData.value.password);
  }
  getRegisteredUsers():any{
    return this.registerUsers;
  }
  isLoggedIn(isValid:boolean){
    if(isValid)
      this.verify=true; 
    else
      this.verify=false;
  }
  getMobileInfo():Observable<Mobile[]>{
 
    return this.http.get<Mobile[]>(this.getMobileDataURL);
  }
   getMobile(){
    this.getMobileInfo().subscribe(data => {
      this.mobileData = data;
    });
  }
  addItem(mobile:Mobile): void {
    this.cart.push(mobile);
    this.totalItems++;
    }
    getTotalItems(){
      return this.totalItems;
    }
    getCart(): Mobile[] {
      return this.cart;
      }
      searchItemByName(name: string): Mobile | undefined {
        const lowercaseName = name.toLowerCase(); // Convert the search name to lowercase
        return this.mobileData.find(mobile => mobile.model.toLowerCase() === lowercaseName);
      }
     addHelp(help:Help){
         this.support.push(help);
        }
      getTicketId():number{
        this.ticketNumber=Math.random()*(Math.pow(10,18));
        return this.ticketNumber;
      }
      getQuery(){
        return this.support;
      }
  // mobileData:Mobile[]=[
  //   {
  //     id:1,
  //     model:"Samsung",
  //     price:139990,
  //     info:"Dynamic AMOLED 2X, 120Hz, HDR10+, 1200 nits (HBM), 1750 nits (peak),\n"+
  //     " Android 13, One UI 5.1, Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm), \n	"+
  //     "Li-Ion 5000 mAh, non-removable, 45W wired, PD3.0, 65% in 30 min" ,
  //     picture: "/assets/S23Ultra.jpg",
  //     cartAdded: false,
  //   },
  //   {
  //     id:2,
  //     model:"Google",
  //     price:49999,
  //     info:"Full-screen 6.3-inch (160.5 mm)2 display, Smooth Display (up to 90 Hz)3, Fast charging8 - up to 50% charge in about 30 minutes8 - with Google 30W USB-C® Charger with USB-PD 3.0 (PPS) sold separately ",
  //     picture: "/assets/Pixel7.jpg",
  //     cartAdded: false
  //   },
  //   {
  //     id:3,
  //     model:"Motorola",
  //     price:19999,
  //     info:"6.6 inches, 103.6 cm2 (~86.4% screen-to-body ratio), Android 12, planned upgrade to Android 13, 	Qualcomm SM6375 Snapdragon 695 5G (6 nm), 	Li-Po 5000 mAh, non-removable",
  //     picture: "assets/g82.jfif",
  //     cartAdded: false
  //   },
  //   {
  //     id:4,
  //     model:"Poco",
  //     price:29999,
  //     info:"Super AMOLED, 120Hz, 700 nits (HBM), 1200 nits (peak), 	Qualcomm SM6375 Snapdragon 695 5G (6 nm), Li-Po 5000 mAh, non-removable",
  //     picture:"assets/poco.webp",
  //     cartAdded: false
  //   },
  //   {
  //     id:5,
  //     model:"Realme",
  //     price:29999,
  //     info:"P-OLED, 144Hz, HDR10+, 1200 nits (peak), Android 13, Mediatek Dimensity 8020 (6 nm), Li-Po 4400 mAh, non-removable      ",
  //     picture: "assets/realme.jpg",
  //     cartAdded: false
  //   },
  //   {
  //     id:6,
  //     model:"One Plus",
  //     price: 29999,
  //     info:"Super AMOLED, 120Hz, 1000 nits (HBM), Android 13, One UI 5.1, 	Mediatek MT6877V Dimensity 1080 (6 nm), Li-Po 5000 mAh, non-removable",
  //     picture: "assets/oneplus.webp",
  //     cartAdded: false
  //   },
  // ]
}