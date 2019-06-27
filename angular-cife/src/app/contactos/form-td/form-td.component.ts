import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Curso, Turno, Sede, Alumno } from 'src/app/models/formulario.model';
import { CURSOS, TURNOS, SEDES } from 'src/app/models/formulario.datos';

@Component({
  selector: 'app-form-td',
  templateUrl: './form-td.component.html',
  styleUrls: ['./form-td.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class FormTdComponent implements OnInit {

  cursos: Array<Curso>;
  turnos: Array<Turno>;
  sedes: Array<Sede>;
  alumno: Alumno;

  constructor() { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.sedes = SEDES;
    this.alumno = new Alumno();
  }

}
