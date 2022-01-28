import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-nova-postagem',
  templateUrl: './nova-postagem.component.html',
  styleUrls: ['./nova-postagem.component.css']
})
export class NovaPostagemComponent implements OnInit {

  titulo: ''
  texto: ''

  constructor(private crudService: CrudService, private router: Router) {

  }

  ngOnInit() {
  }

  inserirPost() {
    return this.crudService.setDados(this.titulo, this.texto).subscribe(dados => {
      console.log(dados)
      this.router.navigate(['posts']);
    }, error => {

    })
  }

}
