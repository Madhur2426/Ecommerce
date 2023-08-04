import { Component, inject } from '@angular/core';
import { Help } from '../Interface/Help';
import { DataService } from '../data.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent {
 // myService:DataService=inject(DataService);
  query:Help[]=[];
  constructor(private myService:DataService){}
  ngOnInit(): void {
    this.query=this.myService.getQuery();
  }
}
