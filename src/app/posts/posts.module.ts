import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { NovaPostagemComponent } from './nova-postagem/nova-postagem.component';

@NgModule({
  declarations: [PostsComponent, NovaPostagemComponent],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
