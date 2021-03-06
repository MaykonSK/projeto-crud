import { UsuarioInterface } from './usuario-interface';
import { environment } from './../../../environments/environment.prod';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const APICEP = "https://viacep.com.br/ws";
const API = environment.apiUrl;
const ApiEstados = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos'

@Injectable({
  providedIn: "root",
})
export class CadastroService {

  constructor(private htpp: HttpClient) {}

  getCep(cep: number): Observable<any> {
    return this.htpp.get(APICEP + "/" + cep + "/json");
  }

  getDados(): Observable<any> {
    return this.htpp.get(API+'/usuarios');
  }

  insertDados(novoUsuario: UsuarioInterface): Observable<any> {
    return this.htpp.post(API+'/usuarios', novoUsuario)
  }

  getEstados(): Observable<any> {
    return this.htpp.get(ApiEstados);
  }
}
