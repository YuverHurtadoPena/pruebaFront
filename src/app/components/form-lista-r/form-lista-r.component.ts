import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cancion } from 'src/app/dto/cancion';
import { ListaRpro } from 'src/app/dto/lista-rpro';
import { ListaReproductionesService } from 'src/app/servicio/lista-reproductiones.service';
import Swal from "sweetalert2";
@Component({
  selector: 'app-form-lista-r',
  templateUrl: './form-lista-r.component.html',
  styleUrls: ['./form-lista-r.component.css']
})
export class FormListaRComponent implements OnInit {
  private service: ListaReproductionesService;
  listCancion: Cancion []=[];
  bandera = false;
  banderaBoton = false;

  ListaForm= new FormGroup({
    nombre: new FormControl("", [
      Validators.required,
      FormListaRComponent.spaceValidator,
    ]),
    description: new FormControl("", [
      Validators.required,
      Validators.maxLength(4000)
    ]),
  });


  cancionForm = new FormGroup({
    titulo: new FormControl("", [
      Validators.required,

    ]),
    artista: new FormControl("", [
      Validators.required,

    ]),
    albun: new FormControl("", [
      Validators.required,

    ]),
    anno: new FormControl("", [
      Validators.required,

    ]),
  });

  private router: Router;
  constructor(
    service: ListaReproductionesService,
    router: Router
  ) {
    this.service = service;
    this.router = router;
   }

  ngOnInit(): void {
  }

  agregarCancion(){
    const dtoCancion = new Cancion(
      this.cancionForm.controls["titulo"].value.trim(),
      this.cancionForm.controls["artista"].value.trim(),
      this.cancionForm.controls["albun"].value.trim(),
      this.cancionForm.controls["anno"].value.trim(),
    );
    this.listCancion.push(dtoCancion);
    this.cancionForm.reset();
    console.log(this.listCancion)
    if(this.listCancion.length>0){
      this.banderaBoton = true;
    }else{
      this.banderaBoton = false;
    }
  }
  save(){
    const dtoList = new  ListaRpro(
      this.ListaForm.controls["nombre"].value.trim(),
      this.ListaForm.controls["description"].value.trim(),
      this.listCancion,

    );
    this.service.saveList(dtoList).subscribe({
      next: (data) =>{
        Swal.fire({
          title: "Registro exitoso",
          icon: "success",
          text: "Se ha guardado la información correctamente",
          confirmButtonText: "Aceptar",

          showCloseButton: true,
        });
        this.router.navigate(["/listar"]);
        this.listCancion = [];
      },
      error: () => {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Ocurrio un error",
          confirmButtonText: "Aceptar",

          showCloseButton: true,
        });
      }

    });

  }

  static spaceValidator(control: FormControl) {
    if ((control.value || "").trim().length === 0) {
      return { havespace: true };
    }

    return null;
  }
  shangeStatus(){
    if(this.bandera){
      this.bandera = false;
    }else{
      this.bandera = true;
    }
  }

}
