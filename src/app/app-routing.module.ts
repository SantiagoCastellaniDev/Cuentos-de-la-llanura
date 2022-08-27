import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BiografiaComponent } from './components/biografia/biografia.component';
import { CuentoComponent } from './components/cuento/cuento.component';
import { HomeComponent } from './components/home/home.component';
import { TextosComponent } from './components/textos/textos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'biografia', component: BiografiaComponent },
  { path: 'textos', component: TextosComponent },
  { path: 'cuento', component: CuentoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
