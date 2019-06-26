import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  post: Post;
  @Output() eventGuardar: EventEmitter<Post>;

  constructor() {
    this.eventGuardar = new EventEmitter();
   }

  ngOnInit() {
    this.post = new Post();
  }

  onClick() {
    this.eventGuardar.next(this.post);
    this.post = new Post();
  }

}
