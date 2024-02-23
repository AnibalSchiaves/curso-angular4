import { Injectable } from "@angular/core";
import { Persona, personas } from "../persona";

@Injectable()
export class PersonaService {


    getPersonas() {
        return personas;
    }

    getLastPersona() : Persona | undefined {
        return personas[personas.length-1];
    }
     
    getPersonaById(id: number | undefined): Persona | undefined {
        return personas.find((p:Persona) => {return p.id==id})
    }

    addPersona(nombre:string, edad:number, trabajo:string) {
        let lastId = this.getLastPersona()?.id;
        if (lastId) {
            let p : Persona = new Persona(lastId+1, nombre, edad, trabajo, false);
            personas.push(p);
        }
    }
}