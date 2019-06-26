import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-lista-blog',
  templateUrl: './lista-blog.component.html',
  styleUrls: ['./lista-blog.component.css']
})
export class ListaBlogComponent implements OnInit {

  aPosts: Array<Post>;

  constructor(public ls: LocalStorageService) { }

  ngOnInit() {
    this.aPosts = this.ls.readStorage('blog');
  }

  onGuardar(ev: Post) {
    this.aPosts.push(ev);
    this.ls.saveStorage('blog', this.aPosts);
  }

  onBorrar(ev: number) {
    this.aPosts.splice(ev, 1);
    this.ls.saveStorage('blog', this.aPosts);
  }

}
