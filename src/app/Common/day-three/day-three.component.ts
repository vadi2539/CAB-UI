import { Component, OnInit } from '@angular/core';

export interface PackageElement {
  car:string;
  non:string;
  ac:string;
}

const ELEMENT_DATA: PackageElement[] = [
  {car:'Tata Indica 4+1',non:'12,050/-',ac:'12,950/-'},
  {car:'Swift Dzire 4+1',non:'13,400/-',ac:'14,300/-'},
  {car:'Toyoto Innova 7+1',non:'-',ac:'18,000'},
  {car:'Tata Etios 7+1',non:'13,400/-',ac:'14,300/-'}

];

@Component({
  selector: 'app-day-three',
  templateUrl: './day-three.component.html',
  styleUrls: ['./day-three.component.css']
})
export class DayThreeComponent implements OnInit {

  displayedColumns: string[] = ['car','non','ac'];
  dataSource = ELEMENT_DATA;
  expand:any;

  constructor() { }

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

}
