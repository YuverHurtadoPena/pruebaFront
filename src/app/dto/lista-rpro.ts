import { Cancion } from "./cancion";

export class ListaRpro {
  id!:Number;
  nombre!: String;
	descripcion!: String;
	listCancion: Cancion []=[];
  constructor(
    nombre: string,
    descripcion: string,
    listCancion: Cancion []=[],

  ) {
    this.nombre = nombre;
    this.descripcion= descripcion;
    this. listCancion = listCancion;
  }

}
