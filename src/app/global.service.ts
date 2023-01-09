import { Injectable, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GlobalService{
  public pageContent: any = {};
  public menuContent: any = {};
  public commonContent: any = {};
  public loginRouting ="/signin";
  
 // public Baseurl: string = environment.baseURL;
  public name : string = "";
  public allocationlistadmin ="/allocationlistadmin";
  public validateUser ="/validateUser";
  public registerUser ="/submitusercreation";
  public getallocationlist ="/getallocationlist";
  public changepassword ="/resetpassword";

  constructor(private router: Router, private toastr : ToastrService) { }

}
