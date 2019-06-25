import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';

@Component({
  selector: 'app-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea;
  aTareas: Array<Tarea>;

  constructor() { }

  ngOnInit() {
    this.tarea = new Tarea();
    this.aTareas = [];
  }

  onClickAdd() {
    this.aTareas.push(this.tarea);
    this.tarea = new Tarea();
    console.log(this.aTareas);
  }
}
