const user1 = {
    nombre: 'Pepe',
    edad: 25,
    saludar: function(aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    }
}

function User(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    this.mascotas = []
}

// Podemos añadir métodos al prototipo de nuestras funciones constructoras

User.prototype.saludar = function(aQuien = 'amigo') {
    console.log(`Hola ${aQuien}, soy ${this.nombre}`)
}

User.prototype.adoptarMascota = function (mascota = new Mascota()) {
    this.mascotas.push(mascota)
}


// Es menos habitual, pero también podemos añadir funciones
// a los prototipos nativos de JS, como Object, Array, Date ....

/* Object.prototype.saludar = function(aQuien = 'amigo') {
        console.log(`Hola ${aQuien}, soy ${this.nombre}`)
    } */

function Mascota(nombre, especie, raza = '' ) {
    this.nombre = nombre
    this.especie = especie
    this.raza = raza
}

let user2 = new User('Elena', 23)
let user3 = new User('Ernesto', 30)
let mascota1 = new Mascota('Cesar', 'perro')
let mascota2 = new Mascota('Titus', 'gato', 'persa')

mascota2.edad = 2
delete mascota1.raza

user2.adoptarMascota(mascota1)

console.log(mascota1.nombre)
console.log(user2.mascotas[0].nombre)

console.log(user1)
console.log(user2)
console.log(user3)
console.log(mascota1)
console.log(mascota2)

user1.saludar('Esnesto')
user2.saludar('Pepe')
user3.saludar(user2.nombre)

user1.saludar(mascota2.raza + ' ' + mascota2.nombre)
// mascota1.saludar(user2.nombre)


/* function saludar(user) {
    console.log(`Hola, soy ${user}`)
}

saludar('Pepe') */

let aDatos = [2,4]
let aNombres = ['Pepe', 'Juan']


// Diferencia entre PROTOTIPOS y clases

// Dependencia : método adoptarMaccota

// Asociación : atributo mascota = new Mascota

user3.mascotas[0] = new Mascota('Piolin', 'canario')
console.log(user3.mascotas[0].nombre)