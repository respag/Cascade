import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from '../app/componentes/app/app.component';
import { HelloComponent } from '../app/componentes/hello/hello.component';
import { SelectService } from '../app/servicios/select.service';
import { HttpClientModule } from '@angular/common/http';
import { NgArrayPipesModule } from 'angular-pipes';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule,NgArrayPipesModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
  providers: [SelectService]
})
export class AppModule { }

