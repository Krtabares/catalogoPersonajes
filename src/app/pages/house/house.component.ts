import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrls: ['./house.component.css']
})
export class HouseComponent implements OnInit {

  casas = [
    { value:"slytherin"},
    { value:"gryffindor"},
    { value:"ravenclaw"},
    { value:"hufflepuff"},
  ]

  columnsHeaders = ["name", "patronus", "age", "image"]

  chars :any[]= []

  constructor(
    private __houseService: HousesService,
  ) { }

  ngOnInit(): void {
  }
  getHouses(e:any){
    
    this.__houseService.getCharacters(e).subscribe(
      (result: any) => {
        this.chars = this.addAgetoList(result)
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
