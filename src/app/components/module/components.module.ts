import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { InicioComponent } from '../inicio/inicio.component';
import { BuscarComponent } from '../buscar/buscar.component';
import { AppRoutingModule } from '../app-routing.routes';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    BuscarComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule { }
