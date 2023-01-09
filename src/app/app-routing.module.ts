import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './Common/Components/layout/layout.component';
import { HomeComponent } from './Common/Components/home/home.component';
import { AboutUsComponent } from './Common/Components/about-us/about-us.component';
import { PackagesComponent } from './Common/Components/packages/packages.component';
import { TariffComponent } from './Common/Components/tariff/tariff.component';
import { ContactUsComponent } from './Common/Components/contact-us/contact-us.component';
import { SearchCarsComponent } from './Common/Components/search-cars/search-cars.component';
import { DayOneComponent } from './Common/Components/day-one/day-one.component';
import { DayTwoComponent } from './Common/day-two/day-two.component';
import { DayThreeComponent } from './Common/day-three/day-three.component';
import { DayFiveComponent } from './Common/day-five/day-five.component';
import { DaySevenComponent } from './Common/day-seven/day-seven.component';
import { DayEightComponent } from './Common/day-eight/day-eight.component';
import { LoginComponent } from './Common/Components/login/login.component';
import { MailComponent } from './Common/Components/mail/mail.component';
import { AdminDashboardComponent } from './Common/Components/admin-dashboard/admin-dashboard.component';
import { ChangepasswordComponent } from './Common/changepassword/changepassword.component';
import { AdminForgetpasswordComponent } from './Common/Components/admin-forgetpassword/admin-forgetpassword.component';



const routes: Routes = [

  { path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'home', component:HomeComponent},
    { path: 'home', component:  HomeComponent},
    { path: 'aboutUs', component: AboutUsComponent},
    { path: 'packages', component: PackagesComponent},
    { path: 'tariff', component: TariffComponent},
    { path: 'contactUs', component: ContactUsComponent},
    { path: 'searchCars', component:  SearchCarsComponent},
    { path: 'day-one', component:  DayOneComponent},
    { path: 'day-two', component:  DayTwoComponent},
    { path: 'day-three', component:  DayThreeComponent},
    { path: 'day-five', component:  DayFiveComponent},
    { path: 'day-seven', component:  DaySevenComponent},
    { path: 'day-eight', component:  DayEightComponent},
    { path: 'login', component:  LoginComponent},
    { path: 'dashboard', component:  AdminDashboardComponent},
    { path: 'mail', component:  MailComponent},
    { path: 'changepassword', component:  ChangepasswordComponent},
    { path: 'admin-forgetpassword', component:  AdminForgetpasswordComponent},

    



    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppRoutingModule { }
