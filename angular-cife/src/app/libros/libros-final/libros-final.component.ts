import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-libros-final',
  templateUrl: './libros-final.component.html',
  styleUrls: ['./libros-final.component.css']
})
export class LibrosFinalComponent implements OnInit {

  clave: string;
  aTitulosLibros: Array<string>;

  constructor(public books: BooksService) { }

  ngOnInit() {
    this.aTitulosLibros = [];
  }

  onBuscar() {
    this.books.getLibros(this.clave).then(
      response => this.aTitulosLibros = response
    );
  }

  onBuscarRx() {
    this.books.getLibrosRx(this.clave).subscribe(
      response => this.aTitulosLibros = response
    );

  }
}

