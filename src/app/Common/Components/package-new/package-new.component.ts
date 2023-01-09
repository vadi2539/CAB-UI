import { Component, OnInit } from '@angular/core';
export interface PackageElement {
  car:string;
  non:string;
  ac:string;
}

const ELEMENT_DATA: PackageElement[] = [
  {car:'Tata Indica 4+1',non:'16,000/-',ac:'17,500/-'},
  {car:'Swift Dzire 4+1',non:'17,500/-',ac:'19,000/-'},
  {car:'Toyoto Innova 7+1',non:'-',ac:'22,000'},
  {car:'Tata Etios 7+1',non:'17,500/-',ac:'19,000/-'}

];

@Component({
  selector: 'app-package-new',
  templateUrl: './package-new.component.html',
  styleUrls: ['./package-new.component.css']
})
export class PackageNewComponent implements OnInit {

  displayedColumns: string[] = ['car','non','ac'];
  dataSource = ELEMENT_DATA;
  constructor() { }
  expand:any;

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
