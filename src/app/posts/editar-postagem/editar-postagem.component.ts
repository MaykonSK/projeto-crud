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

  postId: number

  constructor(private crudService: CrudService, private rotaAtiva: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    //recuperar id da postagem
    this.postId = this.rotaAtiva.snapshot.params["id"]
  }

  editarPost() {
    return this.crudService.updatePost(this.postId, this.titulo, this.texto).subscribe(dados => {
      console.log(dados)
      this.router.navigate(['posts'])
    }, error => {
      console.log(error)
    })
  }


}
