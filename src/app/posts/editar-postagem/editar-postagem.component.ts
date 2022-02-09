import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const control = new FormControl('', Validators.required);

@Component({
  selector: 'app-editar-postagem',
  templateUrl: './editar-postagem.component.html',
  styleUrls: ['./editar-postagem.component.css']
})
export class EditarPostagemComponent implements OnInit {

  titulo: string
  texto: string
  cpf: number

  postId: number

  constructor(private crudService: CrudService, private rotaAtiva: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //recuperar id da postagem
    this.postId = this.rotaAtiva.snapshot.params["id"]
    console.log(this.postId)
    this.recuperarPost();
  }

  editarPost() {
    return this.crudService.updatePost(this.cpf, this.postId, this.titulo, this.texto).subscribe(dados => {
      console.log(dados)
      this.router.navigate(['posts'])
    }, error => {
      console.log(error)
    })
  }

  recuperarPost() {
    return this.crudService.getPost(this.postId).subscribe(dados => {
      console.log(dados)
      this.titulo = dados.tituloPost;
      this.texto = dados.textoPost;
      this.cpf = dados.cpfUsuario;
    }, error => {
      console.log(error)
    })
  }


}
