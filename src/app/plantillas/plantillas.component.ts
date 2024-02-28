import { Component } from "@angular/core";

@Component({
    selector:"app-plantillas",
    templateUrl:"./plantillas.component.html"   
})
export class PlantillasComponent {

    public titulo;
    public administrador;

    constructor() {
        this.titulo = "Plantillas ngTemplate en Angular";
        this.administrador = true;

    }

    cambiarAdmin(value:boolean) {
        this.administrador = value;
    }

}