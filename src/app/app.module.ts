import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CuentoComponent } from './components/cuento/cuento.component';
import { BiografiaComponent } from './components/biografia/biografia.component';
import { PageComponent } from './pages/page/page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextosComponent } from './components/textos/textos.component';
import { CuentosDropdownComponent } from './components/cuentos-dropdown/cuentos-dropdown.component';
import { Cuento1Component } from './cuentos/cuento1/cuento1.component';
import { Cuento2Component } from './cuentos/cuento2/cuento2.component';
import { Cuento3Component } from './cuentos/cuento3/cuento3.component';
import { Cuento4Component } from './cuentos/cuento4/cuento4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CuentoComponent,
    BiografiaComponent,
    PageComponent,
    TextosComponent,
    CuentosDropdownComponent,
    Cuento1Component,
    Cuento2Component,
    Cuento3Component,
    Cuento4Component
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
