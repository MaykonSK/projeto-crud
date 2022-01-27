import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getDados(tipo): Observable<any> {
    return this.http.get(API+'/'+tipo)
  }

  setDados(titulo: string, texto: string): Observable<any> {
    return this.http.post(API+'/posts', {
      title: titulo,
      body: texto
    })
  }
}
