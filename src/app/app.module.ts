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
    CuentosDropdownComponent
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
