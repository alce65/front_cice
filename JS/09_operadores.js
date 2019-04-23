// Asignacion

let x = 23
// x = x + 1
x++
// x = x - 1
x--

// Aritmeticos
let y = 2

let r
r = x + y // 25
r = x - y  // 21
r = x * y // 46
r = x / y // 11.5
r = parseInt( x / y) // 11
// r = Math.round()
// r = Math.floor()
// r = Math.ceil()
r = x % y
console.log('Resultado', r)

y = 2
y += 3
// y = y + 3
y -= 3
// y = y - 3
y *= 2
y /= 3
// y = y % 2
y %= 2


// operador ternario
let edad = 15
let i
if ( edad >= 18 ) {
    i = 0
} else {
    i = 1
}


edad = 25
i = (edad >= 18) ? 0 : 1
console.log('Indice', i)

// Objetos en Notacion JSON
let user = {
    nombre: 'Pepe',
    edad : 23
}
console.log(user)

// Arrays
let numeros = [12, 45, 67]
let usuarios = ['Pepe', 'Juan', 'Rosa', 'Maria']
console.log(usuarios[0])
usuarios[ usuarios.length] = 'Ramon'
usuarios[ usuarios.length] = 'Carolina'
usuarios[100] = 'Ernesto'
console.log( usuarios.length )

// Mensajes al usuario

let mensajes = [
    'Bienvenido al casino',
    'No se admiten mebnores de edad'
]

console.log(mensajes[i])