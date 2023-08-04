import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { SearchPageComponent } from './search-page/search-page.component';
import { SupportComponent } from './support/support.component';
import { TicketsComponent } from './tickets/tickets.component';
import { authGuard } from './auth.guard';
const routes: Routes = [
  {
    path:'home',
    component:HomeComponent,
    canActivate:[authGuard]
  },
  {
    path:'',
    component:LoginComponent,
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'login/register',
    component:RegisterComponent
  },
  {
    path:'cart',
    component:CartComponent,
    canActivate:[authGuard]
  },

  {
    path:'notfound',
    component:NotfoundComponent,
    canActivate:[authGuard]
  },
  
  {
    path:'searchPage',
    component:SearchPageComponent,
    canActivate:[authGuard]
  },
{
  path:'help',
  component:SupportComponent,
  canActivate:[authGuard]

},
{
  path:'ticket',
  component:TicketsComponent,
  canActivate:[authGuard]

}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
