import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-forgetpassword',
  templateUrl: './admin-forgetpassword.component.html',
  styleUrls: ['./admin-forgetpassword.component.css']
})
export class AdminForgetpasswordComponent implements OnInit {

  loginForm:FormGroup;

  constructor(public formbulider:FormBuilder,public router:Router,public toastr:ToastrService) { 
    this.loginForm=this.formbulider.group({
      gmail:['',[Validators.required]]
    })
  }

  ngOnInit() {
  }
  login(){
    debugger;
    if(this.loginForm.valid){
    this.router.navigate(['login']);
    }else{
      this.toastr.error("Please fill the mandatory details",undefined,{
        positionClass:'toast-bottom-right',
      })
    }
  }
  

}
