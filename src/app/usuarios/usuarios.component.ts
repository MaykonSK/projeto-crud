import { UsuarioInterface } from './../conta/cadastro/usuario-interface';
import { CadastroService } from './../conta/cadastro/cadastro.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  users: UsuarioInterface
  loading: boolean = true;
  vazio: boolean

  constructor(private cadastroService: CadastroService) { }

  ngOnInit() {
    this.recuperarUsuarios();
  }

  recuperarUsuarios() {
    return this.cadastroService.getDados().subscribe(dados => {
      this.users = dados;
      this.loading = false
      console.log(this.users)
      if (dados.length == 0) {
        this.vazio = true
      }
    }, error => {
      
    })
  }

}
