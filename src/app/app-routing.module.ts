import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DescripcionComponent } from './descripcion/descripcion.component';
import { ColorComponente } from './color/color.component';
import { InteresadoComponent } from './interesado/interesado.component';
import { NuevoInteresadoComponent } from "./nuevo-interesado/nuevo-interesado.component";
import { PostsComponent } from './posts/posts.component';
import { PlantillasComponent } from './plantillas/plantillas.component';

//const routes: Routes = [];
const routes: Routes = [
  {path:"", component: DescripcionComponent},
  {path:"color", component: ColorComponente},
  {path:"descripcion", component: DescripcionComponent},
  {path:"interesado/:id", component: InteresadoComponent},
  {path:"nuevo", component: NuevoInteresadoComponent},
  {path:"posts", component: PostsComponent},
  {path:"plantillas", component: PlantillasComponent},
  {path:"**", component: DescripcionComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
