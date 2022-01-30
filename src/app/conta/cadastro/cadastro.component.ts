import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  dados: any

  cadastro: FormGroup;

  cep: number
  endereco: any

  //instanciando o form group
  /*
  cadastro = new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    username: new FormControl(''),
    senha: new FormControl('')
  })
  */

  constructor(private formBuilder: FormBuilder, private cadastroSerivce: CadastroService) { }

  ngOnInit() {
    this.configurarFormulario()
  }

  configurarFormulario() {
    this.cadastro = this.formBuilder.group({
      nome: [null, Validators.required],
      sobrenome: [null, Validators.required],
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]], //para mais de uma validação, é necessário colocar outro array dentro
      senha: [null, Validators.required],
      cep: [null, Validators.required],
      logradouro: [{value: null, disabled: true}, Validators.required],
      numeroCasa: [null],
      estado: [{value: null, disabled: true}, Validators.required],
      municipio: [{value: null, disabled: true}, Validators.required]

    })
  }

  obterDados() {
    //value = pegar todas as informaçoes do formulario cadastro
    this.dados = this.cadastro.value;
  }

  localizarCep() {
    if (this.cadastro.value.cep.length == 8) {
      this.cep = this.cadastro.value.cep
      return this.cadastroSerivce.getCep(this.cep).subscribe(dados => {
        this.endereco = dados;
        console.log(this.endereco)
      }, error => {
        console.log('Cep não encontrado!')
      })
    }
  }

}
