export class Skill {
    id: number;
    nombre: string;
    porcentaje: number;
    urlimagen: string;

    constructor(nombre: string, porcentaje: number, urlimagen: string){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
        this.urlimagen = urlimagen;
    
    }
}
