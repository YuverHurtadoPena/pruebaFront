import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/dto/cancion';
import { ListaRpro } from 'src/app/dto/lista-rpro';
import { ListaReproductionesService } from 'src/app/servicio/lista-reproductiones.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-rep',
  templateUrl: './list-rep.component.html',
  styleUrls: ['./list-rep.component.css']
})
export class ListRepComponent implements OnInit {
  private service: ListaReproductionesService;
  listaR: ListaRpro [] = [];
  private router: Router;
  listCan: Cancion [] =[];

  constructor(service: ListaReproductionesService,router: Router) {
    this.service = service;
    this.router = router;
  }

  ngOnInit(): void {
    this.getLista();
  }
  getLista(){
    this.service.getList().subscribe({
      next: (data) =>{
        this.listaR = data;

      },
      error: () => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Ocurrio un error inesperado",
          confirmButtonText: "Aceptar",

          showCloseButton: true,
        });
      }
    })

  }

  deleteLista(name:any){
    this.service.deleteList(name).subscribe({
      next: () =>{
        Swal.fire({
          title: "Operacion Exitosa",
          icon: "success",
          text: "La lista fue eliminada con exito",
          confirmButtonText: "Aceptar",

          showCloseButton: true,
        });
        this.getLista();

      },
      error: () => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Ocurrio un error inesperado",
          confirmButtonText: "Aceptar",

          showCloseButton: true,
        });
      }
    })

  }

  mostrar(id:any){
    this.listCan = [];
    this.listaR.forEach((data)=>{
      data.listCancion.forEach((inf)=>{
        if (inf.id === id){
          this.listCan.push(inf);

        }

      });



    });



  }


}
