import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-education',
  templateUrl: './my-education.component.html',
  styleUrls: ['./my-education.component.scss']
})
export class MyEducationComponent implements OnInit {
 columnDefs=[];
 rowData=[];
  defaultColDef;
 private gridColumnApi;

  constructor() { }

  ngOnInit(): void {
  
  this.columnDefs = [
    { field: 'Session' },
    { field: 'Degree' ,width:250 },
    {field:'Percentage'},
    { field: 'University/Board'}
];
this.defaultColDef= {
  resizable: true
}

this.rowData = [
    {Session: '2012-2016', Degree: 'Bachelor of Engineering(CSE)',Percentage:'76%', 'College/School':'Oriental College of Technology,Bhopal','University/Board': 'R.G.P.V, Bhopal' },
    {Session: '2011', Degree: 'Senior Secondary(12th)',Percentage:'64.6%', 'College/School':'Devasthali Vidyapeeth,Ballia','University/Board': 'CBSE' },
    {Session: '2009', Degree: 'Secondary(10th)',Percentage:'87.6%', 'College/School':'Chhapra Central School, Chhapra','University/Board': 'CBSE' }
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
