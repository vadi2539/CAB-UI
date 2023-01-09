import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, MatSort } from '@angular/material';
import {MatTableDataSource} from '@angular/material/table';

export interface PeriodicElement {
  eventType: string;
  subject: string;
  cc: string;
  template:string;
  
}
const ELEMENT_DATA: PeriodicElement[] = [
  {eventType: 'Claim_Request', subject: 'Claim Request', cc: 'ashokkumar.loganathan@azentio.com', template:'hug'},
  {eventType: 'Forgot_Password', subject: 'Forgot Password', cc: 'ashokkumar.loganathan@azentio.com;ssantos@philbritish.com', template:'hug'},
  {eventType: 'Endorsement_Request', subject: 'Endorsement Request', cc: 'ssantos@philbritish.com', template:'hug'},

]

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {
  displayedColumns: string[] = ['eventType', 'subject', 'cc', 'template'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  filterform:FormGroup;
 datasource;

  constructor(public formbuilder:FormBuilder) {
    this.filterform = this.formbuilder.group({
      filter:[''],
      subject:[''],
      templete:['']
    })
  }
  
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;


  ngOnInit() {
    this.dataSource.paginator = this.paginator;      
      this.dataSource.sort = this.sort; 
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

}
applySubject(event: Event) {
  const subjectValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = subjectValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }

}

 

}