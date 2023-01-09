import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './Common/Components/layout/layout.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularMaterialModule } from './Common/angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './Common/Components/home/home.component';
import { HeaderComponent } from './Common/Components/header/header.component';
import { AboutUsComponent } from './Common/Components/about-us/about-us.component';
import { PackagesComponent } from './Common/Components/packages/packages.component';
import { TariffComponent } from './Common/Components/tariff/tariff.component';
import { FooterComponent } from './Common/Components/footer/footer.component';
import { ContactUsComponent } from './Common/Components/contact-us/contact-us.component';
import { PickupComponent } from './Common/Components/pickup/pickup.component';
import { SearchCarsComponent } from './Common/Components/search-cars/search-cars.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { TranslatePipe } from './Pipes/translate.pipe';
import { MenuPipe } from './Pipes/menu.pipe';
import { FormatDataPipe } from './Pipes/format-data.pipe';
import { FilterDataPipe } from './Pipes/filter-data.pipe';
import { DayOneComponent } from './Common/Components/day-one/day-one.component';
import { DayTwoComponent } from './Common/day-two/day-two.component';
import { DayThreeComponent } from './Common/day-three/day-three.component';
import { DayFiveComponent } from './Common/day-five/day-five.component';
import { DaySevenComponent } from './Common/day-seven/day-seven.component';
import { DayEightComponent } from './Common/day-eight/day-eight.component';
import { PackageNewComponent } from './Common/Components/package-new/package-new.component';
import { LoginComponent } from './Common/Components/login/login.component';
import { MailComponent } from './Common/Components/mail/mail.component';
import { AdminDashboardComponent } from './Common/Components/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './Common/Components/admin-header/admin-header.component';
import { ChangepasswordComponent } from './Common/changepassword/changepassword.component';
import { AdminFooterComponent } from './Common/Components/admin-footer/admin-footer.component';
import { AdminForgetpasswordComponent } from './Common/Components/admin-forgetpassword/admin-forgetpassword.component';








@NgModule({
  declarations: [
    TranslatePipe,
    MenuPipe,
    FormatDataPipe,
    FilterDataPipe,
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    PackagesComponent,
    TariffComponent,
    FooterComponent,
    ContactUsComponent,
    PickupComponent,
    SearchCarsComponent,
    DayOneComponent,
    DayTwoComponent,
    DayThreeComponent,
    DayFiveComponent,
    DaySevenComponent,
    DayEightComponent,
    PackageNewComponent,
    LoginComponent,
    MailComponent,
    AdminDashboardComponent,
    AdminHeaderComponent,
    ChangepasswordComponent,
    AdminFooterComponent,
    AdminForgetpasswordComponent,
    
    
    
   
   

  ],
  entryComponents: [
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ChartsModule,
    HttpClientModule,
    NgxMatSelectSearchModule,
    ToastrModule.forRoot({
      timeOut: 6000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }),
    // MatPasswordStrengthModule.forRoot(),
    // MatPasswordStrengthModule

    ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
