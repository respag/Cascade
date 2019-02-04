import { Component, OnInit, VERSION } from '@angular/core';
import { SelectService } from './select.service';
//import { Country } from './country';
import { State } from './state';
import { Area } from './area';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';
import { OrderByPipe } from 'angular-pipes';
import { Producto } from './producto';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = VERSION.full;

  //selectedCountry: Country = new Country(0, '');
  //countries: Country[];
  selectedArea: Area = new Area('0','');
  areas: Observable<Area[]>;
 // states: State[];
  productos: Observable<Producto[]>; 

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    //this.countries = this.selectService.getCountries();
    this.areas = this.selectService.getAreas();
    //this.onSelect(this.selectedCountry.id);
    this.onSelect(this.selectedArea.CODAREA);
  }

 // onSelect(countryid) {
  onSelect(CODAREA){ 
    //this.states = this.selectService.getStates().filter((item) => item.countryid == countryid);
    //this.productos = this.selectService.getProductos().pipe(filter(item=>item.CODAREA === CODAREA ))
    this.productos = this.selectService.getProductos().pipe(
      map(items=>items.filter(
        item=> item.CODAREA == CODAREA)));
  }
}
