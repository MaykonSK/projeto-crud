import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostsModel } from './posts/posts-model';
import { map } from 'rxjs/operators';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  getDados(tipo): Observable<PostsModel> {
    return this.http.get<PostsModel>(API+'/'+tipo)

    // formata para json
    // .pipe(map((res:Response) => res.json()));
  }

  setDados(cpf: string, titulo: string, texto: string): Observable<any> {
    return this.http.post(API+'/posts', {
      tituloPost: titulo,
      textoPost: texto,
      cpfUsuario: cpf,
      
    })
  }

  deletePost(id) {
    return this.http.delete(API+'/posts/'+id)
  }

  updatePost(cpf: number, id: number, titulo: string, texto: string): Observable<any> {
    return this.http.put(API+'/posts/'+id, {
      tituloPost: titulo,
      textoPost: texto,
      cpfUsuario: cpf,
      idPost: id
    })
  }

  getPost(id: number): Observable<any> {
    return this.http.get(API+'/posts/'+id)
  }

}

