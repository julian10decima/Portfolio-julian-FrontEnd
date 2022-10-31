export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    imgExp : string;
    periodoExp : string;

    constructor(nombreE: string, descripcionE: string, imgExp : string, periodoExp : string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.imgExp = imgExp;
        this.periodoExp = periodoExp;
    }

}
