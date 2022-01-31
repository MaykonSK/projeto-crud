import { EnderecoInterface } from './endereco-interface';
import { UsuarioInterface } from './usuario-interface';
import { CadastroService } from './cadastro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: FormGroup;

  endereco: EnderecoInterface;

  mensagem: string;

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
      bairro: [{value: null, disabled: true}, Validators.required],
      numeroCasa: [null],
      uf: [{value: null, disabled: true}, Validators.required],
      localidade: [{value: null, disabled: true}, Validators.required]

    })
  }

  /*
  obterDados() {
    //value = pegar todas as informaçoes do formulario cadastro
    this.dados = this.cadastro.value;
  }
  */

  /*
  setarInput() {
    this.cadastro.patchValue({nome: 'teste'})
  }
  */


  localizarCep() {
    if (this.cadastro.value.cep.length == 8) {
      const cep = this.cadastro.value.cep;
      return this.cadastroSerivce.getCep(cep).subscribe(dados => {
        this.endereco = dados;
        this.cadastro.patchValue({logradouro: this.endereco.logradouro}) //atualizar o valor do value, que é nulo
        this.cadastro.patchValue({uf: this.endereco.uf})
        this.cadastro.patchValue({localidade: this.endereco.localidade})
        this.cadastro.patchValue({bairro: this.endereco.bairro})
        if (this.endereco.logradouro.length == 0 || this.endereco.bairro.length == 0)  {
          this.cadastro.get('logradouro').enable(); //ativar input
          this.mensagem = 'Não foi possivel encontrar o campo. Por favor, insira acima.'
        } else {
          this.cadastro.get('logradouro').disable();//desativar input
          this.mensagem = ''
        }
      }, error => {
        console.log('Cep não encontrado!\n'+error)
      })
    }
  }

  cadastrarUsuario() {
    if (this.cadastro.valid) {
      const novoUsuario = this.cadastro.getRawValue() as UsuarioInterface; //getRawValue() recupera todos os dados do formulario cadastro
      this.cadastroSerivce.insertDados(novoUsuario).subscribe(dados => {
      console.log(dados)
    })
    }
  }
}
