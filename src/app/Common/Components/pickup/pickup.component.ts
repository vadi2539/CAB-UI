import { validateVerticalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pickup',
  templateUrl: './pickup.component.html',
  styleUrls: ['./pickup.component.css']
})
export class PickupComponent implements OnInit {
  pickupform:FormGroup;

  constructor(public formbulider:FormBuilder) { 

    this.pickupform=this.formbulider.group({

      name:['',[Validators.required]],
      gmail:['',[Validators.required,Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      mobileNumber:['',[Validators.required,Validators.pattern('^(0|[0-9][0-9]*)$')]],
      pickUpAddress:['',[Validators.required]]

    })
  }

  ngOnInit() {
  }

  
}
