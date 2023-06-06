import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CuentoComponent } from './components/cuento/cuento.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextosComponent } from './components/textos/textos.component';
import { CuentosDropdownComponent } from './components/cuentos-dropdown/cuentos-dropdown.component';
import { Cuento1Component } from './cuentos/cuento1/cuento1.component';
import { Cuento2Component } from './cuentos/cuento2/cuento2.component';
import { Cuento3Component } from './cuentos/cuento3/cuento3.component';
import { Cuento4Component } from './cuentos/cuento4/cuento4.component';
import { Cuento5Component } from './cuentos/cuento5/cuento5.component';
import { Cuento6Component } from './cuentos/cuento6/cuento6.component';
import { Cuento7Component } from './cuentos/cuento7/cuento7.component';
import { Cuento8Component } from './cuentos/cuento8/cuento8.component';
import { Cuento9Component } from './cuentos/cuento9/cuento9.component';
import { Cuento10Component } from './cuentos/cuento10/cuento10.component';
import { BibliografiaComponent } from './components/bibliografia/bibliografia.component';
import { NarracionesComponent } from './components/narraciones/narraciones.component';
import { NarracionPageComponent } from './pages/narracion-page/narracion-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CuentosPageComponent } from './pages/cuentos-page/cuentos-page.component';
import { BibliografiaPageComponent } from './pages/bibliografia-page/bibliografia-page.component';
import { MiscelaneaPageComponent } from './pages/miscelanea-page/miscelanea-page.component';
import { MiscelaneaComponent } from './components/miscelanea/miscelanea.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CuentoComponent,
    BiografiaComponent,
    TextosComponent,
    CuentosDropdownComponent,
    Cuento1Component,
    Cuento2Component,
    Cuento3Component,
    Cuento4Component,
    Cuento5Component,
    Cuento6Component,
    Cuento7Component,
    Cuento8Component,
    Cuento9Component,
    Cuento10Component,
    BibliografiaComponent,
    NarracionesComponent,
    NarracionPageComponent,
    HomePageComponent,
    CuentosPageComponent,
    BibliografiaPageComponent,
    MiscelaneaPageComponent,
    MiscelaneaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
