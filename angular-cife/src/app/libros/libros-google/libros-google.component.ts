import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  clave: string;
  aTitulosLibros: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTitulosLibros = [];
  }

  onBuscar() {
    if (this.clave) {
      // this.aTitulosLibros = this.booksMook.getLibros(this.clave);
    }
  }

}
