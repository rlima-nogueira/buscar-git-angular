import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BuscarComponent } from './buscar/buscar.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full',
  }
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
