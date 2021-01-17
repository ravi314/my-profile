import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.scss']
})
export class MyHomeComponent implements OnInit {

  isMarks:boolean;
  isPrfDet:boolean;
  constructor() { }

  ngOnInit(): void {
  }
  getMarks() {
    this.isMarks=true;
  }
  getPrfDet() {
    this.isPrfDet=true;
  }
}
