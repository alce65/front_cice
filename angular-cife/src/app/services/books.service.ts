import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {


  aTitulosLibros: Array<string>;
  urlBase: string;


  constructor(public http: HttpClient) { 
    this.urlBase = 'https://www.googleapis.com/books/v1/volumes?q=intitle:';
  }

  getLibros(clave: string) {
    if (clave) {
      const url = this.urlBase + '"' + clave + '"';
      return this.http.get(url).toPromise().then(
        (response: any) => {
          return response.items.map(
            item => item.volumeInfo.title
          );
        }
      );
    }
  }
}
