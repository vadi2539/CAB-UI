import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Toast, ToastrService } from 'ngx-toastr';
import { AdminForgetpasswordComponent } from '../admin-forgetpassword/admin-forgetpassword.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;

  constructor(public formbulider:FormBuilder, public router: Router , public toastr:ToastrService,public dialog:MatDialog) { 
    this.loginForm=this.formbulider.group({
      gmail:['',[Validators.required]],
      password:['',[Validators.required]]
    })

  }

  ngOnInit() {
  }



  login(){
    debugger;
    if(this.loginForm.valid){
      this.router.navigate(["dashboard"]);
  
    }else{
  
      this.toastr.error("Please fill the mandatory details",undefined,{
  
        positionClass:'toast-bottom-right',
  
      });
  
    }
  }
  

  


  openDialog() {
    const dialogRef = this.dialog.open(AdminForgetpasswordComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  

}
