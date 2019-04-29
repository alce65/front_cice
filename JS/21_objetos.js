/**
 * Notación literal o JSON
 */

 // user1 = new Usuario
 // user2 = new Usuario

let user1 = {
    nombre: 'Pepe',
    edad: 24,
    isAlumno: true,
    direccion : {
        calle: 'Pez',
        num: '3',
        poblacion: 'Madrid'
    },
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y mi tengo ${this.edad} años`)
    },
    altura: 179
}

let user2 = {
    nombre: 'Rosa',
    edad: 27,
    curso: 'Front'
}

user1.nombre = 'Jose'
user1.curso  = 'Back'

user1.saludar()

