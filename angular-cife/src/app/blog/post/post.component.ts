import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  @Input() index: number;
  @Output() eventBorrar: EventEmitter<number>;

  constructor() {
    this.eventBorrar = new EventEmitter();
   }

  ngOnInit() {}

  onClickBorrar() {
    this.eventBorrar.next(this.index);

  }

}
