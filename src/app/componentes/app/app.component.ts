import { Component, OnInit, VERSION } from '@angular/core';
import { SelectService } from '../../servicios/select.service';
import { Area } from '../../clases/area';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Producto } from '../../clases/producto';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = VERSION.full;
  selectedArea: Area = new Area('0','');
  areas: Observable<Area[]>;
  productos: Observable<Producto[]>; 

  constructor(private selectService: SelectService) { }

  ngOnInit() {
    this.areas = this.selectService.getAreas();
    this.onSelect(this.selectedArea.CODAREA);
  }

  onSelect(CODAREA){ 
    this.productos = this.selectService.getProductos().pipe(
      map(items=>items.filter(
        item=> item.CODAREA == CODAREA)));
  }
}
