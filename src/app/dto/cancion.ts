export class Cancion {
id!: Number;
	titulo!: string;
	artista!: string;
	albun!: string;
	anno!: string;

  constructor(
    titulo: string,
    artista: string,
    albun: string,
    anno: string,
  ) {
    this.titulo = titulo;
    this.artista = artista;
    this.albun = albun;
    this.anno = anno;
  }
}
