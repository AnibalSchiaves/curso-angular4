import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Persona, personas } from "../persona";

@Component({
    selector:"app-interesado",
    templateUrl:"./interesado.component.html"
})
export class InteresadoComponent {

    private id:number | undefined;
    public persona:Persona | undefined;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ) {

    }

    ngOnInit() {
        this._route.params.forEach((params:Params) => {
            this.id = params['id'];
            this.persona = personas.find((p:Persona) => {return p.id==this.id}) 
        })
    }

    irUltimo() {
        let id:number = personas[personas.length-1].id;
        console.log(id);
        this._router.navigate(["/interesado",id]);
    }

}