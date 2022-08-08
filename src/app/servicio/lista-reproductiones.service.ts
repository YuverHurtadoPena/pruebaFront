import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { ListaRpro } from '../dto/lista-rpro';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaReproductionesService {
  @Output() sendListCancion: EventEmitter<any> = new EventEmitter();
  private generalUrl = environment.host_services_api;
  private httpClient: HttpClient;
  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }
  public saveList(lista: ListaRpro): Observable<any> {
    return this.httpClient.post<any>(`${this.generalUrl}lists`, lista);
  }
  public getList(): Observable<any> {
    return this.httpClient.get<any>(`${this.generalUrl}list`);
  }

  public deleteList(name:String): Observable<any> {
    return this.httpClient.delete<any>(`${this.generalUrl}list/${name}`);
  }
}
