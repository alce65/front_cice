import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea.model';
import { faTrash, faEdit, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  selector: 'app-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.css']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea;
  aTareas: Array<Tarea>;
  faTrash: IconDefinition;
  faEdit: IconDefinition;
  storageName: string;

  constructor(public ls: LocalStorageService) { }

  ngOnInit() {
    this.faTrash = faTrash;
    this.faEdit = faEdit;
    this.tarea = new Tarea();
    this.storageName = 'tareas';
    this.aTareas = this.ls.readStorage(this.storageName);
  }

  onClickAdd() {
    if (this.tarea.nombre === '') {
      return;
    }
    this.aTareas.push(this.tarea);
    this.ls.saveStorage(this.storageName, this.aTareas);
    this.tarea = new Tarea();
    console.log(this.aTareas);
  }

  onClickDelete() {
    this.aTareas = [];
    this.ls.removeStorage(this.storageName);
  }

  onClickEditar(i: number) {
    this.aTareas[i].isEdited =  !this.aTareas[i].isEdited;
    console.log(this.aTareas);
  }

  onClickBorrar(i: number) {
    this.aTareas.splice(i, 1);
    this.ls.saveStorage(this.storageName, this.aTareas);
  }

  onBlur(ev: any, i: number) {
    this.aTareas[i].nombre = ev.target.textContent;
    this.ls.saveStorage(this.storageName, this.aTareas);
  }

  onSelectCheck() {
    console.log(this.aTareas);
    this.ls.saveStorage(this.storageName, this.aTareas);
  }

}
