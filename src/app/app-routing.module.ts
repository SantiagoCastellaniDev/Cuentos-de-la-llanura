import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiografiaComponent } from './components/biografia/biografia.component';/*
import { CuentoComponent } from './components/cuento/cuento.component';*/
import { HomeComponent } from './components/home/home.component';
import { TextosComponent } from './components/textos/textos.component';
import { Cuento1Component } from './cuentos/cuento1/cuento1.component';
import { Cuento2Component } from './cuentos/cuento2/cuento2.component';
import { Cuento3Component } from './cuentos/cuento3/cuento3.component';
import { Cuento4Component } from './cuentos/cuento4/cuento4.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'textos', component: TextosComponent },
  { path: 'cuento1', component: Cuento1Component },
  { path: 'cuento2', component: Cuento2Component },
  { path: 'cuento3', component: Cuento3Component },
  { path: 'cuento4', component: Cuento4Component },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
