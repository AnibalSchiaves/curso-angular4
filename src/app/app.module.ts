import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ColorComponente } from './color/color.component';
import { InteresadoComponent } from './interesado/interesado.component';

//import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    ColorComponente,
    InteresadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
