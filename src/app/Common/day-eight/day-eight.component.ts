import { Component, OnInit } from '@angular/core';

export interface PackageElement {
  car:string;
  non:string;
  ac:string;
}

const ELEMENT_DATA: PackageElement[] = [
  {car:'Tata Indica 4+1',non:'20,500/-',ac:'22,500/-'},
  {car:'Swift Dzire 4+1',non:'23,500/-',ac:'25,500/-'},
  {car:'Toyoto Innova 7+1',non:'-',ac:'30,500'},
  {car:'Tata Etios 7+1',non:'23,500/-',ac:'25,500/-'}

];
@Component({
  selector: 'app-day-eight',
  templateUrl: './day-eight.component.html',
  styleUrls: ['./day-eight.component.css']
})
export class DayEightComponent implements OnInit {
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
