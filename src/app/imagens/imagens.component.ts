import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.css']
})
export class ImagensComponent implements OnInit {

  tipo = 'photos';
  dadosImagens: any
  loading: boolean = true;

  constructor(private crudService: CrudService) {
    this.getImagens();
  }

  ngOnInit() {
  }

  getImagens() {
    return this.crudService.getDados(this.tipo).subscribe(dados => {
      this.dadosImagens = dados;
      this.loading = false;
    }, error => {
      console.log(error)
    })
  }

}
