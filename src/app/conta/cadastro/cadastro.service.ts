import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API = 'https://viacep.com.br/ws'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

constructor(private htpp: HttpClient) { }

getCep(cep: number): Observable<any> {
  return this.htpp.get(API+'/'+cep+'/json')
}

}
