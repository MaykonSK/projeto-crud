import { EditarPostagemComponent } from './editar-postagem/editar-postagem.component';
import { NavPostComponent } from './nav-post/nav-post.component';
import { ListaPostsComponent } from './lista-posts/lista-posts.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NovaPostagemComponent } from './nova-postagem/nova-postagem.component';
import { FormsModule } from '@angular/forms';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { UsuariosComponent } from '../usuarios/usuarios.component';

@NgModule({
  declarations: [PostsComponent, NovaPostagemComponent, ListaPostsComponent, NavPostComponent, EditarPostagemComponent],
  imports: [
    CommonModule,
    PostsRoutingModule,
    FormsModule,
  ]
})
export class PostsModule { }
