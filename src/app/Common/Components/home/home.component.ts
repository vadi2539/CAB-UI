import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CabserviceService } from '../../Services/cabservice.service';
declare var $: any;

export interface city {
  value: string;
  viewValue: string;
}
export interface trip {

  value: string;
  viewValue: string;
}

export interface pickup {

  value: string;
  viewValue:string;

}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  outstationForm :FormGroup;
  localForm:FormGroup;
  airportForm:FormGroup;
  minDate: Date;
  returnDate:any;
  lovs:any[]=[];
  mindate:Date;
  fromControl:FormControl = new FormControl();
  cityControl:FormControl = new FormControl();
  toControl:FormControl = new FormControl();

  citys: city []=[
    {value:"Mysore",viewValue:"Mysore"},
    {value:"Bangalore",viewValue:"Bangalore"}
  ];

  trips: trip []=[
    {value:"Cab From Airport",viewValue:"Cab From Airport"},
    {value:"Cab to Airport",viewValue:"Cab to Airport"},
  ];

  pickups : pickup []=[
    {value:" 12:00 AM ",viewValue:" 12:00 AM "},
    {value:" 12:30 AM ",viewValue:" 12:30 AM "},
    {value:" 01:00 AM ",viewValue:" 01:00 AM "},
    {value:" 01:30 AM ",viewValue:" 01:30 AM "},
    {value:" 02:00 AM ",viewValue:" 02:00 AM "},
    {value:" 02:30 AM ",viewValue:" 02:30 AM "},
    {value:" 03:00 AM ",viewValue:" 03:00 AM "},
    {value:" 03:30 AM ",viewValue:" 03:30 AM "},
    {value:" 04:00 AM ",viewValue:" 04:00 AM "},
    {value:" 04:30 AM ",viewValue:" 04:30 AM "},
    {value:" 05:00 AM ",viewValue:" 05:00 AM "},
    {value:" 05:30 AM ",viewValue:" 05:30 AM "},
    {value:" 06:00 AM ",viewValue:" 06:00 AM "},
    {value:" 06:30 AM ",viewValue:" 06:30 AM "},
    {value:" 07:00 AM ",viewValue:" 07:00 AM "},
    {value:" 07:30 AM ",viewValue:" 07:30 AM "},
    {value:" 08:00 AM ",viewValue:" 08:00 AM "},
    {value:" 08:30 AM ",viewValue:" 08:30 AM "},
    {value:" 09:00 AM ",viewValue:" 09:00 AM "},
    {value:" 09:30 AM ",viewValue:" 09:30 AM "},
    {value:" 10:00 AM ",viewValue:" 10:00 AM "},
    {value:" 10:30 AM ",viewValue:" 10:30 AM "},
    {value:" 11:00 AM ",viewValue:" 11:00 AM "},
    {value:" 11:30 AM ",viewValue:" 11:30 AM "},
    {value:" 12:00 PM ",viewValue:" 12:00 PM "},
    {value:" 12:30 PM ",viewValue:" 12:30 PM "},
    {value:" 01:00 PM ",viewValue:" 01:00 PM "},
    {value:" 01:30 PM ",viewValue:" 01:30 PM "},
    {value:" 02:00 PM ",viewValue:" 02:00 PM "},
    {value:" 02:30 PM ",viewValue:" 02:30 PM "},
    {value:" 03:00 PM ",viewValue:" 03:00 PM "},
    {value:" 03:30 PM ",viewValue:" 03:30 PM "},
    {value:" 04:00 PM ",viewValue:" 04:00 PM "},
    {value:" 04:30 PM ",viewValue:" 04:30 PM "},
    {value:" 05:00 PM ",viewValue:" 05:00 PM "},
    {value:" 05:30 PM ",viewValue:" 05:30 PM "},
    {value:" 06:00 PM ",viewValue:" 06:00 PM "},
    {value:" 06:30 PM ",viewValue:" 06:30 PM "},
    {value:" 07:00 PM ",viewValue:" 07:00 PM "},
    {value:" 07:30 PM ",viewValue:" 07:30 PM "},
    {value:" 08:00 PM ",viewValue:" 08:00 PM "},
    {value:" 08:30 PM ",viewValue:" 08:30 PM "},
    {value:" 09:00 PM ",viewValue:" 09:00 PM "},
    {value:" 09:30 PM ",viewValue:" 09:30 PM "},
    {value:" 10:00 PM ",viewValue:" 10:00 PM "},
    {value:" 10:30 PM ",viewValue:" 10:30 PM "},
    {value:" 11:00 PM ",viewValue:" 11:00 PM "},
    {value:" 11:30 PM ",viewValue:" 11:30 PM "},
    
   
  ]

  

  
   


  
  
  constructor( public formbulider: FormBuilder,public router: Router,public cabservices:CabserviceService,public toastr:ToastrService) { 

    this.outstationForm=this.formbulider.group({
      optionOutstation:'ONE',
      name:['',[Validators.required]],
      mobile:['',[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('^(0|[1-9][0-9]*)$')]],
      from:['',[Validators.required]],
      to:['',[Validators.required]],
      pickUpDate:['',[Validators.required]],
      pickUpTime:['',[Validators.required]],
      returnDate:['']
    })

    this.localForm=this.formbulider.group({
      city:['',[Validators.required]],
      pickUp:['',[Validators.required]],
      pickUpAt:['',[Validators.required]],
      

    })

    this.airportForm=this.formbulider.group({

      city:['',[Validators.required]],
      triping:['',[Validators.required]],
      pickUpAddress:['',[Validators.required]],
      pickUpDate:['',[Validators.required]],
      pickUpAt:['',[Validators.required]],

    })

    const currentYear = new Date().getFullYear();
    this.minDate = new Date();
    this.mindate = new Date();
   

  }


  ngOnInit() {
    debugger;
    this.getLovValue();
  }

  getLovValue(){
    debugger;
    this.cabservices.getPageLOVs().subscribe((res:any) => {
      debugger;
      console.log(res);
      this.lovs = res;
    })
  }

  onCheckChange($event){
    debugger;
  if($event=="ROUND"){
    this.returnDate ="ROUND";
    this.outstationForm.patchValue({
      optionOutstation:$event
    })
    this.outstationForm.reset();
    this.outstationForm.get('returnDate').setValidators([Validators.required]);
    this.outstationForm.get('returnDate').updateValueAndValidity();
    
  }else{
    this.returnDate ="ONE";
    this.outstationForm.patchValue({
      optionOutstation:$event
    })
    this.outstationForm.reset();
    this.outstationForm.get('returnDate').clearValidators();
    this.outstationForm.get('returnDate').updateValueAndValidity();
    
  }


 }

 outstationsearch(){
debugger;
  if(this.outstationForm.valid){
  this.router.navigate(["searchCars"]);
  this.outstationForm.reset();    
  }else{

    this.toastr.error("Please fill the mandatory details",undefined,{
      positionClass:'toast-bottom-right',
    });

  }
    
}

localSearch(){
  debugger;
  if(this.localForm.valid){
    this.router.navigate(["searchCars"]);

  }else{

    this.toastr.error("Please fill the mandatory details",undefined,{

      positionClass:'toast-bottom-right',

    });

  }
}

packageView(){
  this.router.navigate(["packages"]);
}


addEvent(type: string, event: MatDatepickerInputEvent<Date>){
  debugger;
  var value = this.outstationForm.value.optionOutstation;
  if(value=="ROUND"){
    var pickupdate = this.outstationForm.value.pickUpDate;
    const d = new Date(pickupdate);
    d.setDate(d.getDate() + 1);
    var returndate = d;
    this.mindate = d;
  }

}

airportSearch(){
  debugger;
  if(this.airportForm.valid){
    this.router.navigate(["searchCars"]);

  }else{

    this.toastr.error("Please fill the mandatory details",undefined,{

      positionClass:'toast-bottom-right',

    });

  }
 
}


dayOne(){
  this.router.navigate(["day-one"]);

}

dayTwo(){
  this.router.navigate(["day-two"]);
}

dayThree(){
  this.router.navigate(["day-three"]);
}
dayFive(){
  this.router.navigate(["day-five"]);
}
daySeven(){
  this.router.navigate(["day-seven"]);
}
dayEight(){
  this.router.navigate(["day-eight"]);
}



}


