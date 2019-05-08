let user = {
    nombre : 'Pepe',
    edad : 23,
    curso : 'Front'
}

console.log(user)

// let userString = "{nombre : 'Pepe', edad : 23, curso : 'Front'}"

let cadena = JSON.stringify(user)
console.log(cadena)

console.log(JSON.parse(cadena))

let alumno1 = {
    nombre : 'Elena',
    edad : 28,
    curso : 'JavaScript'
} 

alumno2 = JSON.parse(JSON.stringify(alumno1))
alumno2.nombre = 'Carlos'

alumno3 = Object.assign({}, alumno1)
alumno3.nombre = 'Raul'

console.log(alumno1)
console.log(alumno2)
console.log(alumno3)