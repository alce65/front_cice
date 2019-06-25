import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  // Persistencia en localStorage

  saveStorage(name: string, data: Array<any>) {
    window.localStorage.setItem(name, JSON.stringify(data));
  }

  readStorage(name: string) {
    let read = [];
    const cadena = window.localStorage.getItem(name);
    if (cadena) {
      read = JSON.parse(cadena);
    }
    return read;
  }

  removeStorage(name: string) {
    window.localStorage.removeItem(name);
  }
}
