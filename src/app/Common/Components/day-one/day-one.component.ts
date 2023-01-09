import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface PackageElement {
  car:string;
  non:string;
  ac:string;
}

const ELEMENT_DATA: PackageElement[] = [
  {car:'Tata Indica 4+1',non:'3,550/-',ac:'3,950/-'},
  {car:'Swift Dzire 4+1',non:'4,150',ac:'4,550/-'},
  {car:'Tata Indica 7+1',non:'----',ac:'5,750'},
  {car:'Toyoto Etios 4+1',non:'4,150',ac:'4,550/-'},
];

@Component({
  selector: 'app-day-one',
  templateUrl: './day-one.component.html',
  styleUrls: ['./day-one.component.css']
})
export class DayOneComponent implements OnInit {

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
