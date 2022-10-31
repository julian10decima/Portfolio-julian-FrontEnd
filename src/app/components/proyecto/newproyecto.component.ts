import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ImageService } from 'src/app/service/image.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-newproyecto',
  templateUrl: './newproyecto.component.html',
  styleUrls: ['./newproyecto.component.css']
})
export class NewproyectoComponent implements OnInit {
  nombreP: string;
  descripcionP: string;
  fecha: string;
  urlimgP: string;
  urlP: string;

  constructor(private proyectoS: ProyectoService, private router: Router) { }

  ngOnInit(): void {
    
  }

  onCreate(): void{
    const proyecto = new Proyecto(this.nombreP, this.descripcionP, this.fecha, this.urlimgP, this.urlP); 
    this.proyectoS.save(proyecto).subscribe(
      data => {
        alert("Proyecto creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir el Proyecto");
        this.router.navigate(['']);
      }
    )
  }

}
