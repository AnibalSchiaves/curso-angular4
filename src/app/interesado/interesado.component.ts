import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Persona } from "../persona";
import { PersonaService } from "../services/persona.service";

@Component({
    selector:"app-interesado",
    templateUrl:"./interesado.component.html"
})
export class InteresadoComponent {

    private id:number | undefined;
    public persona:Persona | undefined;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _personaService: PersonaService
    ) {

    }

    ngOnInit() {
        this._route.params.forEach((params:Params) => {
            this.id = params['id'];
            this.persona = this._personaService.getPersonaById(this.id);
        })
    }

    irUltimo() {
        let id:number | undefined = this._personaService.getLastPersona()?.id;
        if (id) {
            console.log(id);
            this._router.navigate(["/interesado",id]);
        }
    }

}