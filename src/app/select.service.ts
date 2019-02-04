import { Injectable } from '@angular/core';
//import { Country } from './country';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { State } from './state';
import { Observable } from 'rxjs';
import { Area } from './area';
import { Producto } from './producto';

const URL_Base ="http://localhost:59762/";

@Injectable()
export class SelectService {

  constructor(private http: HttpClient){
  }
/*   getCountries() {
    return [
     new Country(1, 'USA' ),
     new Country(2, 'Brazil' ),
     new Country(3, 'Argentina' ),
     new Country(4, 'Panamá' ),
    ];
  } */

  public getAreas(){//}:Observable<Area[]> {
    return  this.http.get<Area[]>(URL_Base + 'api/Accesos/ListaAreas')
  }
  
 /*  getStates() {
   return [
     new State(1, 1, 'Arizona' ),
     new State(2, 1, 'Alaska' ),
     new State(3, 1, 'Florida'),
     new State(4, 1, 'Hawaii'),
     new State(5, 2, 'Sao Paulo' ),
     new State(6, 2, 'Rio de Janeiro'),
     new State(7, 2, 'Minas Gerais' ),
     new State(8, 3, 'Buenos Aires' ),
     new State(9, 3, 'Tierra del Fuego' ),
     new State(10, 3, 'La Pampa' ),
     new State(11, 3, 'Santa Fé' ),
     new State(12, 4, 'Panamá' ),
     new State(13, 4, 'Panamá Oeste' ),
     new State(14, 4, 'Colón' ),
     new State(15, 4, 'Chiriquí' ),
    ];
  } */

  getProductos():Observable<Producto[]> {
    return  this.http.get<Producto[]>(URL_Base + 'api/Accesos/ListaProdByArea')
  }

}