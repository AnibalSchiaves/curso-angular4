import { Component } from "@angular/core";

@Component({
    selector:"app-color",
    templateUrl:"./color.component.html",
    styleUrls:["./color.component.css"],
})
export class ColorComponente {

    public color:string;

    constructor() {
        this.color = 'red';
    }

    ngOnInit() {
        
    }
}