export interface TareaIf {
    nombre: string;
    isCompleted: boolean;
    isEdited: boolean;
}

export class Tarea implements TareaIf {
    constructor(
        public nombre: string = '',
        public isCompleted: boolean = false,
        public isEdited: boolean = false
    ) {}
}
