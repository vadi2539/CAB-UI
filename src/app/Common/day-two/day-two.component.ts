import { Component, OnInit } from '@angular/core';

export interface PackageElement {
  car:string;
  non:string;
  ac:string;
}

const ELEMENT_DATA: PackageElement[] = [
  {car:'Tata Indica 4+1',non:'6,850/-',ac:'7,350/-'},
  {car:'Swift Dzire 4+1',non:'7,600/-',ac:'8500/-'},
  {car:'Toyoto Innova 7+1',non:'-',ac:'10100'},
  {car:'Tata Etios 7+1',non:'7600/-',ac:'8500/-'}

];

@Component({
  selector: 'app-day-two',
  templateUrl: './day-two.component.html',
  styleUrls: ['./day-two.component.css']
})
export class DayTwoComponent implements OnInit {

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
