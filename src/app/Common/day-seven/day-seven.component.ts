import { Component, OnInit } from '@angular/core';

export interface PackageElement {
  car:string;
  non:string;
  ac:string;
}

const ELEMENT_DATA: PackageElement[] = [
  {car:'Tata Indica 4+1',non:'15,000/-',ac:'17,250/-'},
  {car:'Swift Dzire 4+1',non:'20,750/-',ac:'23,500/-'},
  {car:'Toyoto Innova 7+1',non:'-',ac:'27,000'},
  {car:'Tata Etios 7+1',non:'20,750/-',ac:'23,500/-'}

];

@Component({
  selector: 'app-day-seven',
  templateUrl: './day-seven.component.html',
  styleUrls: ['./day-seven.component.css']
})
export class DaySevenComponent implements OnInit {
  displayedColumns: string[] = ['car','non','ac'];
  dataSource = ELEMENT_DATA;
  expand:any;
  expand1:any;

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
