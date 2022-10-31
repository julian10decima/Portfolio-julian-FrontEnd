export class Proyecto {
    id: number;
    nombreP: string;
    descripcionP: string;
    fecha: string;
    urlimgP: string;
    urlP: string;

    constructor(nombreP: string, descripcionP: string, fecha:string, urlimgP: string, urlP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.fecha = fecha;
        this.urlimgP = urlimgP;
        this.urlP = urlP;
    }
}
