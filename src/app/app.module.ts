import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeEs, 'es');

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ColorComponente } from './color/color.component';
import { InteresadoComponent } from './interesado/interesado.component';
import { NuevoInteresadoComponent } from './nuevo-interesado/nuevo-interesado.component';
import { PostsComponent } from './posts/posts.component';

import { SiNoPipe } from './pipes/sino.pipe';

import { PersonaService } from './services/persona.service';
import { PostService } from './services/post.service';

//import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    DescripcionComponent,
    ColorComponente,
    InteresadoComponent,
    NuevoInteresadoComponent,
    SiNoPipe,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    //routing
  ],
  providers: [PersonaService, {provide: LOCALE_ID, useValue: 'es'}, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
