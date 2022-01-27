import { PostsModel } from './posts-model';
import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: PostsModel
  loading: boolean = true;

  constructor(private crudService: CrudService) {
    this.recuperarPosts();
  }

  ngOnInit() {
  }

  recuperarPosts() {
    return this.crudService.getDados('posts').subscribe(dados => {
      this.posts = dados;
      this.loading = false
    }, error => {
      console.log(error)
    })
  }

}
