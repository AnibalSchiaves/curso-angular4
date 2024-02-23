import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ColorComponente } from './color/color.component';
import { InteresadoComponent } from './interesado/interesado.component';
import { NuevoInteresadoComponent } from './nuevo-interesado/nuevo-interesado.component';

import { PersonaService } from './services/persona.service';

//import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    ColorComponente,
    InteresadoComponent,
    NuevoInteresadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //routing
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
