import { Component, OnInit } from '@angular/core';
import { BooksMookService } from 'src/app/services/books-mook.service';

@Component({
  selector: 'app-libros-mook',
  templateUrl: './libros-mook.component.html',
  styleUrls: ['./libros-mook.component.css']
})
export class LibrosMookComponent implements OnInit {

  clave: string;
  aTitulosLibros: Array<string>;

  constructor(public booksMook: BooksMookService) { }

  ngOnInit() {
    this.aTitulosLibros = [];
  }

  onBuscar() {
    if (this.clave) {
      this.aTitulosLibros = this.booksMook.getLibros(this.clave);
    }
  }

  onBuscarAsinc() {
    if (this.clave) {
      this.booksMook.getLibrosAsinc(this.clave).then(
        (response) => {
          this.aTitulosLibros = response;
        }
      )
    }
  }

}
