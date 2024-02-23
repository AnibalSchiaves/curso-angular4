import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ColorComponente } from "./color/color.component";
import { DescripcionComponent } from "./descripcion/descripcion.component";
import { InteresadoComponent } from "./interesado/interesado.component";

const appRoutes: Routes = [
    {path:"", component: DescripcionComponent},
    {path:"color", component: ColorComponente},
    {path:"descripcion", component: DescripcionComponent},
    {path:"interesado/:id", component: InteresadoComponent},
    {path:"**", component: DescripcionComponent}
]

//export const appRoutingProviders: any[] = [];

/** así estába en el curso, sin embargo lo resolví pasando las rutas a app-routing.module.ts
 *  que ya existía
 */
export const routing: ModuleWithProviders<RouterModule> = RouterModule.forRoot(appRoutes);

