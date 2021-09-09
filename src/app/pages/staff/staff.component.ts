import { Component, OnInit } from '@angular/core';
import { StaffService } from 'src/app/services/staff.service';

@Component({
  selector: 'app-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.css']
})
export class StaffComponent implements OnInit {
  columnsHeaders = ["name", "patronus", "age", "image"]
  staff: any[]=[]
  constructor( private __staffService: StaffService) { }

  ngOnInit(): void {
    this.getStaff()
  }

  getStaff(){
    
    this.__staffService.getStaff().subscribe(
      (result: any) => {
        this.staff = this.addAgetoList(result)
      }, msg => {
      }
    );
  }

  addAgetoList(list: any[]){
    var auxList: any[]=[]
    var objaux :any={}
    list.forEach(element => {
      objaux = element
      objaux.age = this.getAge(element.dateOfBirth)
      auxList.push(objaux)
    });

    return auxList
  }

   getAge(dateString: string) {
    var birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000));
}


}
