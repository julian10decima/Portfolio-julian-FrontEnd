export class Educacion {
    id? : number;
    nombreEdu : string;
    nombreInstituto : string;
    imgEdu : string;
    periodo : string;

    constructor(nombreEdu: string, nombreInstituto: string, imgEdu : string, periodo : string){
        this.nombreEdu = nombreEdu;
        this.nombreInstituto = nombreInstituto;
        this.imgEdu = imgEdu;
        this.periodo = periodo;
    }
}
