import { Component,OnInit,inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Mobile } from '../Interface/Mobile';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  mobileData:Mobile[]=[];
 //myService:DataService=inject(DataService);
  constructor(private router:Router,private myService:DataService){}
  ngOnInit(): void {
    this.myService.getMobile();
  }
openCart(){
  this.router.navigate(['cart']);
}
display(value:string){

}
details(model : string){
  let isModelFound=false;
  if(model){
  /*{ queryParams: { mobileModel: model } } is an object that contains the query parameters you want 
  to pass to the destination page. Query parameters are used to send additional data in the URL.
queryParams is a property that specifies the query parameters.
{ mobileModel: model } defines a specific query parameter named "mobileModel" and assigns it the value
 of the "model" variable. The "model" variable should contain the data you want to pass as the "mobileModel"
parameter.
Overall, the code is instructing the application to navigate to the "searchPage" route and pass the 
"mobileModel" parameter with the value of the "model" variable. This allows the searchPage route to receive 
and access the "mobileModel" parameter and use it for further processing or display.
*/
console.log(model);
this.myService.getMobileInfo().subscribe(
  (mobileData: Mobile[]) => {
    this.mobileData = mobileData;
    for (let i = 0; i < this.mobileData.length; i++) {
      if (this.mobileData[i].model == model) {
        console.log("Mobile Found");
        
        this.router.navigate(['/searchPage'], { state: { mobile: this.mobileData[i] } });
        isModelFound = true;
        break;
      }
    }
    if (!isModelFound) {
      this.router.navigate(['notfound']);
    }
  },
  (error: any) => {
    console.error(error);
    // Handle error if necessary
  }
);
// for(let i=0;i<this.mobileData.length;i++){
//   if(this.mobileData[i].model==model){
//     console.log("Model Found");
//     this.router.navigate(['/searchPage'],{ state: { mobile: this.mobileData[i] } });
//     isModelFound=true;
//     break;
//   }
// }
 // this.router.navigate(['/searchPage'], { queryParams: { mobileModel: model} });}
 if(isModelFound==false)
  this.router.navigate(['notfound']);
}
}
}