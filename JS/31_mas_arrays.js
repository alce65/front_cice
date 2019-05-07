let nombres = ['Pepe', 'Juan', 'Bernardette', 'Penelope', 'Eustaquio']

// Slice es una función inmutable
console.log(nombres.slice(3,4))

//Splice es una función mutable

let newNombres = nombres.splice(1,1)
console.clear()
console.log(nombres)
console.log(newNombres)

// Colas y pilas - todas mutables

nombres.push() //  añade al final
nombres.pop() // quita al final

nombres.shift() // quita el primero
nombres.unshift() // añadir al principio

nombres.push('Aurora')
// nombres[nombres.length] = 'Aurora'

let datos = [1, 70, 7, 5, 9 ]
let masDatos = [1,4,6]
datos.push(masDatos)
console.log(datos)