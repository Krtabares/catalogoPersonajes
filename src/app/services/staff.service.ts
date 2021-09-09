import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  constructor(private http: HttpClient) { }

     /**
   * Obtiene los personajes de las casas
   *
   * @param {*} params
   * @returns Observable<object>
   * @memberof StaffService
   */
    getStaff() {
      return this.http.get("http://hp-api.herokuapp.com/api/characters/staff", {});
    }
}
