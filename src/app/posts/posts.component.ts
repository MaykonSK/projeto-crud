import { PostsModel } from './posts-model';
import { CrudService } from './../crud.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() {}

  component1: boolean = false;
  component2: boolean = false

  ngOnInit() {
  }

  ativarComponent1() {
    if (this.component2) {
      this.component2 = false
      this.component1 = true
    } else {
      this.component1 = true
    }
  }
  ativarComponent2() {
    if (this.component1) {
      this.component1 = false
      this.component2 = true
    } else {
      this.component2 = true
    }
  }

}
