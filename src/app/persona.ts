export class Persona {

    /*public nombre: string;
    public edad: number;
    public trabajo: string;

    constructor(nombre:string, edad:number, trabajo:string) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }*/

    public color:string;
    
    constructor(
        public id:number,
        public nombre:string,
        public edad:number,
        public trabajo:string,
        public sabeProgramar:boolean
    ) {
        this.color = sabeProgramar?'red':'blue';
    }

    setSabeProgramar(sabe:boolean) {
        this.sabeProgramar = sabe;
        this.color = sabe?'red':'blue';
    }

}

export const personas = [
    new Persona(1,"Anibal Schiaves", 44, "Empleado", true),
    new Persona(2,"Osvaldo Ferrero", 50, "Monotributista", false),
    new Persona(3,"Mariano Gialdini", 35, "Empleado", true)
]