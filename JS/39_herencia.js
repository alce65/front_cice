// Personas
    // Alumnos

function Persona(nombre, edad) {    
}

Persona.prototype.saludar = function(aQuien = 'amigo') {
    console.log(`Hola ${aQuien}, soy ${this.nombre}`)
}

function Alumno(nombre, edad, curso) {
    this.nombre = nombre
    this.edad = edad
    this.curso = curso
}

Alumno.prototype = new Persona()
Alumno.prototype.constructor = Alumno

const alumno1 = new Alumno('Pepe', 23, 'JavaScript')
const alumno2 = new Alumno('Elena', 22, 'JavaScript')

console.log(alumno1)
alumno1.saludar()
alumno2.saludar(alumno1.nombre)


///////////////////////////////////////////////////

// Herencia prototípica (prototypal inheritance)
// Basándose en la idea de que los objetos heredan de objetos de Douglas Crockford
console.clear()

const person1 = {
    nombre: 'Pepe',
    edad: 25,
    saludar: function(aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    }
}

user1 = Object.create(person1)
user1.clave = '1234'

console.log(user1)
console.log(user1.nombre)
user1.saludar()

