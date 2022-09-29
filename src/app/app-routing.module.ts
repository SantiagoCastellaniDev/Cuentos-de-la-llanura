import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliografiaComponent } from './components/bibliografia/bibliografia.component';

import { BiografiaComponent } from './components/biografia/biografia.component';/*
import { CuentoComponent } from './components/cuento/cuento.component';*/
import { HomeComponent } from './components/home/home.component';/*
import { NarracionesComponent } from './components/narraciones/narraciones.component';*//*
import { TextosComponent } from './components/textos/textos.component';*/
import { Cuento1Component } from './cuentos/cuento1/cuento1.component';
import { Cuento10Component } from './cuentos/cuento10/cuento10.component';
import { Cuento2Component } from './cuentos/cuento2/cuento2.component';
import { Cuento3Component } from './cuentos/cuento3/cuento3.component';
import { Cuento4Component } from './cuentos/cuento4/cuento4.component';
import { Cuento5Component } from './cuentos/cuento5/cuento5.component';
import { Cuento6Component } from './cuentos/cuento6/cuento6.component';
import { Cuento7Component } from './cuentos/cuento7/cuento7.component';
import { Cuento8Component } from './cuentos/cuento8/cuento8.component';
import { Cuento9Component } from './cuentos/cuento9/cuento9.component';
import { CuentosPageComponent } from './pages/cuentos-page/cuentos-page.component';
import { NarracionPageComponent } from './pages/narracion-page/narracion-page.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'bibliografia', component: BibliografiaComponent },/*
  { path: 'narraciones', component: NarracionesComponent},*/
  { path:'narraciones', component:NarracionPageComponent},
  { path: 'cuentos', component: CuentosPageComponent },
  { path: 'cuento1', component: Cuento1Component },
  { path: 'cuento2', component: Cuento2Component },
  { path: 'cuento3', component: Cuento3Component },
  { path: 'cuento4', component: Cuento4Component },
  { path: 'cuento5', component: Cuento5Component },
  { path: 'cuento6', component: Cuento6Component },
  { path: 'cuento7', component: Cuento7Component },
  { path: 'cuento8', component: Cuento8Component },
  { path: 'cuento9', component: Cuento9Component },
  { path: 'cuento10', component: Cuento10Component },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
