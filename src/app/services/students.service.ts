import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  /**
* Obtiene los estudintes
*
* @param {*} params
* @returns Observable<object>
* @memberof StudentsService
*/
 getStudents() {
   return this.http.get("http://hp-api.herokuapp.com/api/characters/students", {});
 }
}
