import { Component, OnInit} from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Mobile } from '../Interface/Mobile';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  mobileData:Mobile[]=[];
  //myService:DataService=inject(DataService);
  constructor(private router:Router,private mobileService:DataService) {}

 ngOnInit(): void {
  this.mobileService.getMobileInfo().subscribe(data => {
    this.mobileData = data;
  });
 }

  addToCart(mobile:Mobile){
    this.mobileService.addItem(mobile);
    mobile.cartAdded = true;  // Set 'clicked' property to true when the button is clicked

  }
  clicked(mobile:Mobile):void{
    this.router.navigate(['/searchPage'], { queryParams: { mobileModel: mobile.model } });
  } 
}
