import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Toast, ToastrService } from 'ngx-toastr';
import { CabserviceService } from '../Services/cabservice.service';
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  
  passwordForm:FormGroup;
  isDisabled:boolean = false;

  constructor(public formbulider:FormBuilder,public toastr:ToastrService,public matdialog:MatDialog,public cabservice:CabserviceService) { 
    this.passwordForm=this.formbulider.group({
      oldpassword:['',[Validators.required]],
      newPassword:['',[Validators.required,Validators.maxLength(10)]],
      conPassword:['',[Validators.required,Validators.maxLength(10)]]


    })
  }

  ngOnInit() {
  }

  Submit(passwordForm){
    debugger;
 var loginpassword = sessionStorage.getItem('password');
    if(this.passwordForm.value.password == "" && this.passwordForm.value.conpass =="" && this.passwordForm.value.oldpass =="" ){
      this.toastr.error("Please Enter the Mandatory Fields", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else if(this.passwordForm.value.oldpass =="" || this.passwordForm.value.oldpass ==undefined){
      this.toastr.error("Please Enter the Old Password", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
  }else if(this.passwordForm.value.password == "" ||this.passwordForm.value.password == undefined || 
  this.passwordForm.value.conpass =="" || this.passwordForm.value.conpass ==undefined ){
    this.toastr.error("Please Enter the New / Confirm Password", undefined, {
      positionClass: 'toast-bottom-right',
      timeOut: 6000
 });
  }else if(this.passwordForm.value.password != this.passwordForm.value.conpass){
      this.toastr.error("New and Confirm Password not Match", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else if (this.passwordForm.value.oldpass == this.passwordForm.value.password){
      this.toastr.error("Old & New password cannot be same", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else if(this.passwordForm.value.oldpass != loginpassword){
      this.toastr.error("Old Password does not match", undefined, {
        positionClass: 'toast-bottom-right',
        timeOut: 6000
   });
    }else{
      if(this.passwordForm.valid){
        debugger;
        passwordForm.value.userName =sessionStorage.getItem('username'); ;
        let Form = JSON.stringify(this.passwordForm.value);
      let headers = new HttpHeaders();
      headers = headers.set('Content-Type', 'application/json');
        this.cabservice.changepassword(Form).subscribe((res: any)=>{
          console.log(res);
          debugger;
          this.matdialog.closeAll();
          if(res.responseBody){
            this.toastr.success(res.responseBody, undefined, {
              positionClass: 'toast-bottom-right',
              timeOut: 6000
         });
          }
        })
      }
    }
  }

  onStrengthChanged(eve){
    debugger;
    if(eve == 100){
     this.isDisabled = false;
    }
  }

}
