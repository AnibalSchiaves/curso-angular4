import { Component } from "@angular/core";
import { Persona } from "../persona";
import { PersonaService } from "../services/persona.service";

@Component({
    selector:"app-descripcion",
    templateUrl:"./descripcion.component.html"
})
export class DescripcionComponent {
    public gentileza:string;
    public extra:string;

    public personas:Array<Persona>;

    constructor(
        private _personaService: PersonaService
    ) {
        this.gentileza = "Natalia Lohurcade";
        this.extra = "Esta es información adicional";
        this.personas = this._personaService.getPersonas();
    }

    ngOnInit() {
        this.hola();
    }

    mostrarDetalles(p:Persona) {
        alert(`${p.nombre} tiene ${p.edad} años y trabaja de ${p.trabajo}`);
    }

    cambiarSabeProgramar(p:Persona) {
        //p.sabeProgramar = !p.sabeProgramar
        p.setSabeProgramar(!p.sabeProgramar);
    }

    hola() {
        alert("Hola!!");
    }
}