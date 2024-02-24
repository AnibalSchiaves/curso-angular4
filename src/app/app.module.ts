import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ColorComponente } from './color/color.component';
import { InteresadoComponent } from './interesado/interesado.component';
import { NuevoInteresadoComponent } from './nuevo-interesado/nuevo-interesado.component';

import { SiNoPipe } from './pipes/sino.pipe';

import { PersonaService } from './services/persona.service';

//import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    ColorComponente,
    InteresadoComponent,
    NuevoInteresadoComponent,
    SiNoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //routing
  ],
  providers: [PersonaService, {provide: LOCALE_ID, useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
