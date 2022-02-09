import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardGuard } from './autenticacao/guard.guard';

const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path: 'produtos', loadChildren: () => import('./produtos/produtos.module').then(m => m.ProdutosModule)},
  {path: 'imagens', loadChildren: () => import('./imagens/imagens.module').then(m => m.ImagensModule)},
  {path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule)},
  {path: 'cadastrar', loadChildren: () => import('./conta/cadastro/cadastro.module').then(m => m.CadastroModule)},
  {path: 'login', loadChildren: () => import('./conta/login/login.module').then(m => m.LoginModule)},
  {path: 'usuarios', loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule)}, //canLoad: [GuardGuard]} //protegendo a rota usuarios
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
