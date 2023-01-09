import { Component, OnInit } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
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
