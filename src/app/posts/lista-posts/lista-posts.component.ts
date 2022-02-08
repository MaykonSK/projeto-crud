import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';
import { PostsModel } from '../posts-model';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  posts: PostsModel
  
  loading: boolean = true;

  idPost: number;
  vazio: boolean;

  sucessDelete: boolean;

  constructor(private crudService: CrudService, private router: Router) {
    this.recuperarPosts();
  }

  ngOnInit() {
  }

  recuperarPosts() {
    return this.crudService.getDados('posts').subscribe(dados => {
      this.posts = dados;
      console.log(this.posts)
      this.loading = false
      if (!dados) {
        this.vazio = true;
      }
    }, error => {
      console.log(error)
    })
  }

  deletarPost(id) {
    return this.crudService.deletePost(id).subscribe(dados => {
      console.log(dados)
      this.recuperarPosts();
      this.sucessDelete = true;
    }, error => {
      console.log(error)
      this.sucessDelete = false;
    })
  }

  recuperarId(id) {
    this.idPost = id;
  }

  recuperarIdEdit(id) {
    this.idPost = id;
    this.router.navigate(['posts/editar-postagem/'+id])
  }
}
