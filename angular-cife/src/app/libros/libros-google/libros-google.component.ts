import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-libros-google',
  templateUrl: './libros-google.component.html',
  styleUrls: ['./libros-google.component.css']
})
export class LibrosGoogleComponent implements OnInit {

  clave: string;
  aTitulosLibros: Array<string>;
  urlBase: string;

  constructor(public http: HttpClient) { }

  ngOnInit() {
    this.aTitulosLibros = [];
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  onBuscar() {
    if (this.clave) {
      const url = this.urlBase + '"' + this.clave + '"';
      this.http.get(url).toPromise().then(
        (response: any) => {
          this.aTitulosLibros = response.items.map(
            item => item.volumeInfo.title
          );
        }
      ); }
  }

  onBuscarRx() {
    if (this.clave) {
      const url = this.urlBase + '"' + this.clave + '"';
      this.http.get(url)
      .pipe<object>( map(
        (response: any) => response.items.map( item => item.volumeInfo.title )
        )).
      subscribe(
        (response: any) => this.aTitulosLibros = response
    ); }
  }
}

