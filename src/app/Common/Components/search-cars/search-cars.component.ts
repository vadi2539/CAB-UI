import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-search-cars',
  templateUrl: './search-cars.component.html',
  styleUrls: ['./search-cars.component.css']
})
export class SearchCarsComponent implements OnInit {
  expand:any;
  expand1:any;
  expand2:any;
  expand3:any;
  constructor( public toastrservice:ToastrService) { }

  ngOnInit() {
    this.expand="0";
  }

  detailCLick($event){
    debugger;
    if(this.expand=="0"){
      this.expand ="1";
    }else{
      this.expand ="0";
    }
  }
  detailCLick1($event){
    debugger;
    if(this.expand1=="0"){
      this.expand1 ="1";
    }else{
      this.expand1 ="0";
    }
  }
  detailCLick2($event){
    debugger;
    if(this.expand2=="0"){
      this.expand2="1";
    }else{
      this.expand2 ="0";
    }
  }
  detailCLick3($event){
    debugger;
    if(this.expand3=="0"){
      this.expand3 ="1";
    }else{
      this.expand3="0";
    }
  }

  selectButton(){
     
    this.toastrservice.success("We had shared the estimation via email")

  }

   SelectButton1(){
     this.toastrservice.success(" We had shared the estimation via email")
   }

   SelectButton2(){
    this.toastrservice.success(" We had shared the estimation via email")
   }

  SelectButton3(){
    this.toastrservice.success("We had shared the estimation via mail ")
    
  }
}
