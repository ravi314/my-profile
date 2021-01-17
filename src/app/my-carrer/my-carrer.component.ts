import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-carrer',
  templateUrl: './my-carrer.component.html',
  styleUrls: ['./my-carrer.component.scss']
})
export class MyCarrerComponent implements OnInit {
  columnDefs=[];
  rowData=[];
   defaultColDef;
  private gridColumnApi;
 
   constructor() { }
 
   ngOnInit(): void {
   
   this.columnDefs = [
     { field: 'Organisation' },
     { field: 'City' },
     {field:'Role'},
     { field: 'Duration'}
 ];
 this.defaultColDef= {
   resizable: true
 }
 
 this.rowData = [
     {Organisation: 'Wells Fargo', City: 'Hyderabad',Role:'Web Developer','Duration': '2019 - Present' },
     {Organisation: 'TCS', City: 'Hyderabad',Role:'Web Developer','Duration': '2016 - 2019' }
 ];
 
 }
 autoSizeAll(skipHeader) {
   var allColumnIds = [];
   this.gridColumnApi.getAllColumns().forEach(function (column) {
     allColumnIds.push(column.colId);
   });
   this.gridColumnApi.autoSizeColumns(allColumnIds, skipHeader);
 }
}
