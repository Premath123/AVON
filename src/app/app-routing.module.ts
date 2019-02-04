import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { PageNotFoundComponent } from './page-not-found.component';
import { LoyaltyComponent } from './loyalty/loyalty.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { RepresentativeComponent } from './representative/representative.component';
import { BuyerRepComponent } from './buyer-rep/buyer-rep.component';
import { Avonpartner1Component } from './avonpartner1/avonpartner1.component';
import { CustomerComponent } from './customer/customer.component';
import { PointStatusComponent } from './point-status/point-status.component';

const routes: Routes = /*[{ path: '', component: LoginComponent },
 { path: 'login', component: LoginComponent },
  { path: 'login', component: LoginComponent },
{ path: 'dashboard',  component: DashboardComponent , canActivate: [AuthGuard] },
{ path: '**', component: PageNotFoundComponent }];*/
  [{ path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'loyalty', component: LoyaltyComponent },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'representative', component: RepresentativeComponent },
    { path: 'customer', component: CustomerComponent },
    { path: 'buyer-rep', component: BuyerRepComponent },
    { path: 'avonpartner1', component: Avonpartner1Component },
    { path: 'point-status', component: PointStatusComponent },
    { path: '', redirectTo: '/loyalty', pathMatch: 'full' },
    { path: '', redirectTo: '/point-status', pathMatch: 'full' },

    { path: '', redirectTo: '/representative', pathMatch: 'full' },
   { path: '', redirectTo: '/buyer-rep', pathMatch: 'full' },
    { path: '', redirectTo: '/avonpartner', pathMatch: 'full' },

    { path: '', redirectTo: '/customer', pathMatch: 'full' },
    { path: '', redirectTo: '/checkout', pathMatch: 'full' }];




@NgModule({
  exports: [RouterModule] ,
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
