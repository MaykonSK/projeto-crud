import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  titulo: ''
  texto: ''


  postagem

  constructor(private crudService: CrudService) {
    this.inserirPost()
  }


  ngOnInit() {
  }

  inserirPost() {
    return this.crudService.setDados(this.titulo, this.texto).subscribe(dados => {
      console.log(dados)
    }, error => {

    })
  }


}
