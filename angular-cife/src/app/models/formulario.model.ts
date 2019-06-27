import { Persona } from './persona.model';

export class Curso {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public descripcion = '',
    ) {}
}

export class Turno {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public descripcion: string = '',
    ) {}
}

export class Sede {
    constructor(
        public id: string = '',
        public nombre: string = '',
        public descripcion: string = '',
    ) {}
}

export class Alumno extends Persona {
    constructor(
        nombre: string = '',
        apellidos: string = '',
        dni: string = '',
        correo: string = '',
        password: string = '',
        nacimiento: string = '',
        comentarios: string = '',
        public condicionesOk: boolean = false,
        public cederDatosOk: boolean = false,
        public curso: Curso = new Curso(),
        public turno: Turno = new Turno(),
        public sede: Sede = new Sede()

    ) {
        super(nombre, apellidos, dni, correo, password, nacimiento, comentarios);
    }
}
