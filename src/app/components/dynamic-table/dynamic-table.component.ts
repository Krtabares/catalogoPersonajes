import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit {

  @Input() registres: any[] = [];
  @Input() headers: string[] = []
  columnOrder: any[]=[]
  filter: string=""
  valuesAux: any[]=[]

  selectedColumn:string ="" 
  constructor() { }

  ngOnInit(): void {
    this.columnOrder =  this.prepareColumOrder(this.headers)
    this.valuesAux = this.registres
    
  }
  ngOnChanges() {
    this.valuesAux = this.registres
  }

  getValue(row: any, column:string) {

    return row[column];
  }


  orderBy(columnHeader: any) {

    this.ordASC(columnHeader);

  }

  ordASC(propertyName:string) {
    this.valuesAux.sort(function (a, b) {
      if (a[propertyName] === null) {
        return -1;
      } else if (b[propertyName] === null) {
        return 1;
      }

      if (a[propertyName] > b[propertyName]) {
        return 1;
      }
      if (a[propertyName] < b[propertyName]) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });

  }


  prepareColumOrder(columns: any[]){
    var list:any[] = []
    var myOb: any= {}
    columns.forEach(element => {
      myOb={value:element, icon:""}
      list.push(myOb)
    });
    return list
  }

  filterFunction() {
    var  filter, i;
    this.valuesAux = []
    filter = this.filter.toUpperCase();
    for (i = 0; i < this.registres.length; i++) {
      var txtValue = this.registres[i][this.selectedColumn]
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        this.valuesAux.push(this.registres[i])
      } 
    }
  }

}
