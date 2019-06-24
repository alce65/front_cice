import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludar',
  templateUrl: './saludar.component.html',
  styleUrls: ['./saludar.component.css']
})
export class SaludarComponent implements OnInit {
  nombre: string;
  mensaje: string;

  constructor() { }

  ngOnInit() {
    this.nombre = 'amigo';
    this.mensaje = 'Cuando puedas, escribe tu nombre';
  }

  onClickBorrar(ev: Event) {
    console.log(ev);
    this.nombre = '';
  }

  /* nameFormat() {
    if (this.nombre === 'amigo' ) {
      return this.nombre;
    } else {
      return this.nombre.toUpperCase();
    }
  } */
}
