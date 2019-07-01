import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksMookService {
  aLibros: Array<string>;

  constructor() {
    this.aLibros = [
      'Angular para torpes',
      'Angular inicial',
      'Angular avanzado'
    ];
  }

  getLibros(clave: string) {
    return this.aLibros;
  }

  getLibrosAsinc(clave: string): Promise<Array<string>> {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(this.aLibros), 1000);
    });
  }
}
