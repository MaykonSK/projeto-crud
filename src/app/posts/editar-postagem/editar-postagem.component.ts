import { CrudService } from 'src/app/crud.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

const control = new FormControl('', Validators.required);

@Component({
  selector: 'app-editar-postagem',
  templateUrl: './editar-postagem.component.html',
  styleUrls: ['./editar-postagem.component.scss']
})
export class EditarPostagemComponent implements OnInit {

  titulo: string
  texto: string

  constructor(private crudService: CrudService) {}

  ngOnInit() {
  }

  editarPost() {
    if (!this.titulo) {
      this.crudService.recuperarFormEdit(this.titulo, this.texto)
    }

  }


}
