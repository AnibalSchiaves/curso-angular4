import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PersonaService } from "../services/persona.service";
import { Persona } from "../persona";

@Component({
    selector:"app-nuevo-interesado",
    templateUrl:"./nuevo-interesado.component.html",
    styleUrls:['./nuevo-interesado.component.css']
})
export class NuevoInteresadoComponent {

    /*public nombre:string;
    public edad:string;
    public trabajo:string;*/
    public persona:Persona;

    constructor(
        private _router:Router,
        private _personaService: PersonaService
    ) {
        /*this.nombre = "";
        this.edad = "";
        this.trabajo = "";*/
        this.persona = new Persona(0,"",0,"",false);
    }

    cancelar() {
        this._router.navigate(['/descripcion']);
    }

    agregar() {
        this._personaService.addPersona(this.persona.nombre, this.persona.edad, this.persona.trabajo);
        if (confirm("EL interesado se ha guardado correctamente. ¿Añade otro?")) {
            //no hago nada
        } else {
            this._router.navigate(['/descripcion']);
        }
        
    }
}