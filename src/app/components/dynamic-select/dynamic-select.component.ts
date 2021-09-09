import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-select',
  templateUrl: './dynamic-select.component.html',
  styleUrls: ['./dynamic-select.component.css']
})
export class DynamicSelectComponent implements OnInit {
  @Input() placeHolderDyn: string = "";
  @Input() filtrable: boolean = false;
  @Input() dynValues: any[] = [];
  @Output() selectedOpt = new EventEmitter<any>();
  selectedValue = null
  valuesAux: any[] = [];
  filter: any = null; 
  constructor() { }

  ngOnInit(): void {

    this.valuesAux = this.dynValues
  }

   filterFunction() {
    var  filter, i;
    this.valuesAux = []
    console.log(this.filter);
    
    filter = this.filter.toUpperCase();
    for (i = 0; i < this.dynValues.length; i++) {
      var txtValue = this.dynValues[i].value 
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        this.valuesAux.push(this.dynValues[i])
      } 
    }
  }

  selectValue(val:any){
    this.filter = val.value
    this.selectedValue =val.value
    this.selectedOpt.emit(val.value);
  }

}
