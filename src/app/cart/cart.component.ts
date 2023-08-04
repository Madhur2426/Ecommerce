import { Component, OnInit, inject } from '@angular/core';
import { DataService } from '../data.service';
import { Mobile } from '../Interface/Mobile';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartList:Mobile[]=[];
   numberOfItems:number=0;
   totalCost:number=0;
  //mobile:DataService=inject(DataService);
  constructor(private mobile:DataService){}
  ngOnInit(): void {
    this.cartList = this.mobile.getCart();
    this.total();
  }
  total(){
    this.totalCost=0;
    this.numberOfItems=0;
    for (const mobileCost of this.cartList) {
      this.totalCost += mobileCost.price 
      this.numberOfItems++;
    }
    return this.totalCost;
  }
  isCartEmpty():boolean{
    return this.cartList.length==0;
  }
  deleteCartItem(mobile:Mobile): void {
    mobile.cartAdded=false;
    const index = this.cartList.indexOf(mobile);
    if (index !== -1) {
      this.cartList.splice(index,1);  // 1= number of elements to be removed
      this.total();
      mobile.cartAdded=false;
    }
}

}
