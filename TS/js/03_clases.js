class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.alma = true;
    }
    saludar(aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`);
    }
}
let person1 = new Persona('Pepe', 23);
// person1.altura = 175 daría un error en TS
console.log(person1);
person1.saludar();
class Alumno extends Persona {
    constructor(nombre, edad, curso) {
        super(nombre, edad);
        this.curso = curso;
    }
    saludar(aQuien = 'amigo') {
        super.saludar(aQuien);
        console.log(`Estoy estudiando ${this.curso}`);
    }
}
let alumno1 = new Alumno('Elena', 22, 'WordPress');
console.log(alumno1);
alumno1.saludar();
//# sourceMappingURL=03_clases.js.map