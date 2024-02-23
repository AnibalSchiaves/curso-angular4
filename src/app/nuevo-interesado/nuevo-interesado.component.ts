import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PersonaService } from "../services/persona.service";

@Component({
    selector:"app-nuevo-interesado",
    templateUrl:"./nuevo-interesado.component.html",
    styleUrls:['./nuevo-interesado.component.css']
})
export class NuevoInteresadoComponent {

    public nombre:string;
    public edad:string;
    public trabajo:string;

    constructor(
        private _router:Router,
        private _personaService: PersonaService
    ) {
        this.nombre = "";
        this.edad = "";
        this.trabajo = "";
    }

    cancelar() {
        this._router.navigate(['/descripcion']);
    }

    agregar() {
        this._personaService.addPersona(this.nombre, Number(this.edad), this.trabajo);
        this._router.navigate(['/descripcion']);
    }
}