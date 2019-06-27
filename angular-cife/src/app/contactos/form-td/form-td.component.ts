import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  @ViewChild('formCurso', {static: true})  formCurso: NgForm;
  @ViewChild('refDlgConfirmar', {static: true}) dlgConfirmar: ElementRef;

  constructor() { }

  ngOnInit() {
    this.cursos = CURSOS;
    this.turnos = TURNOS;
    this.sedes = SEDES;
    this.alumno = new Alumno();
    this.alumno.curso = null;
    this.alumno.sede = null;
    this.alumno.turno = null;

    console.log(this.formCurso);
  }

  onSubmit(ev) {
    ev.preventDefault();
    this.dlgConfirmar.nativeElement.open = true;
  }

  onClickProbar() {
    this.alumno = new Alumno('Pepe', 'Perez', '50283456Z',
      'pp@sample.com', 'Curso@2345', '2000-12-12', '', true, true,
      null, null, null);
  }

  onClickDlg(ev: boolean) {
    if (ev) {
      console.log('Datos enviados');
      
      /* this.alumno = new Alumno();
      this.alumno.curso = null;
      this.alumno.sede = null;
      this.alumno.turno = null; */
      this.formCurso.reset();
    }
    this.dlgConfirmar.nativeElement.open = false;
  }
}
