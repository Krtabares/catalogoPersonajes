import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  columnsHeaders = ["name", "patronus", "age", "image"]
  students: any[]=[]

  constructor( private __studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getStudents()
  }

  getStudents(){
    
    this.__studentsService.getStudents().subscribe(
      (result: any) => {
       
        var solicitudes:any =  localStorage.getItem('solicitudes')
        var list: any[]=[]
       if( !solicitudes){
        list = result
       }else{
        list = [].concat(JSON.parse(solicitudes),result )
       }
       this.students = this.addAgetoList(list)
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

addStudent(obj:any){

  var solicitudes:any =  localStorage.getItem('solicitudes')
  var list: any[]=[]
  if( !solicitudes){
    list.push(obj)
    localStorage.setItem("solicitudes",JSON.stringify(list))
  }else{
    list=JSON.parse(solicitudes)
    list.unshift(obj)
    localStorage.setItem("solicitudes",JSON.stringify(list))
  }
  console.log(obj)
  obj.age =  this.getAge(obj.dateOfBirth)
  this.students.unshift(obj)
}

}
