import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousesService {

  constructor(private http: HttpClient) { }

   /**
   * Obtiene los personajes de las casas
   *
   * @param {*} params
   * @returns Observable<object>
   * @memberof CategoriesService
   */
    getCharacters(nombreCasa:string) {
      return this.http.get("http://hp-api.herokuapp.com/api/characters/house/"+nombreCasa, {});
    }
}
