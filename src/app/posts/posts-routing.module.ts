import { EditarPostagemComponent } from './editar-postagem/editar-postagem.component';
import { NovaPostagemComponent } from './nova-postagem/nova-postagem.component';
import { PostsComponent } from './posts.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'nova-postagem', component: NovaPostagemComponent},
  {path: 'editar-postagem/:id', component: EditarPostagemComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
