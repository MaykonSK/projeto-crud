import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-nova-postagem',
  templateUrl: './nova-postagem.component.html',
  styleUrls: ['./nova-postagem.component.css']
})
export class NovaPostagemComponent implements OnInit {

  titulo: any = ''
  texto: any = ''
  cpf: any = ''


  constructor(private crudService: CrudService, private router: Router) {
    // this.titulo = new FormControl('', Validators.required)
    // this.texto = new FormControl('', Validators.required)
  }

  ngOnInit() {
  }

  inserirPost() {
    return this.crudService.setDados(this.cpf, this.titulo, this.texto).subscribe(dados => {
      console.log(dados)
    }, error => {

    })
  }

  redirecionar() {
    this.router.navigate(['posts'])
  }

}
