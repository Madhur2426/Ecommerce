import { Component, OnInit, inject } from '@angular/core';
import { Mobile } from '../Interface/Mobile';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit{
  mobile:Mobile ={} as Mobile;
  //myService:DataService=inject(DataService);
  constructor(private route: ActivatedRoute,private router:Router,private myservice:DataService) {
  }
  /* this.route.queryParams.subscribe(params => {...}) sets up a subscription to the query parameters
   of the current route. It allows the component to react whenever the query parameters change.
const itemName = params['mobileModel']; retrieves the value of the query parameter named "mobileModel"
 from the params object. This assumes that the query parameter was passed through the URL.
const found = this.myService.searchItemByName(itemName); calls a method searchItemByName in a service
 (myService) and passes the itemName as a parameter. It presumably searches for an item based on the 
 given name and returns the result.
if (found != undefined) {...} checks if a valid result was found by the searchItemByName method. If a 
valid result is found, it assigns it to the this.mobile property of the component.
If a valid result is not found, this.router.navigate(['notfound']) navigates to the 'notfound' route. 
This is likely a route defined in the application that displays a "not found" page or handles cases
 where the item being searched is not found.
console.log(this.mobile.info); logs the info property of the this.mobile object to the console. This
 assumes that the this.mobile object has an info property containing some relevant information about the 
 found item.
Overall, this code listens for changes in the query parameters of the current route. When the 
'mobileModel' query parameter changes, it performs a search based on the provided name, updates the 
component's state if a valid result is found, and navigates to a "not found" page if the result is not found.
 Finally, it logs the relevant information to the console. */
  ngOnInit(){
    
    this.mobile = history.state.mobile;
 
}
   addToCart(item:Mobile):void{
      this.myservice.addItem(item);
      item!.cartAdded= true;  // Set 'clicked' property to true when the button is clicked
    }
}
