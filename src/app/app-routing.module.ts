// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { RegistroComponent } from './registro/registro.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';

const routes: Routes = [
  { path: '', component: BienvenidaComponent },
  {
    path: 'home', component: MenuPrincipalComponent,
    children: [
      { path: 'articulos', component: ArticulosComponent },
      { path: 'registro', component: RegistroComponent },
      { path: 'listaArticulos', component: ListaArticulosComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
