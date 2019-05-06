
// let vuelo = new Objet()
let vuelo = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time:  '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    arrival: {
        claveIATA: 'LAX',
        time:  '2004-09-23 10:42',
        ciudad: 'Los Angeles'
    }
}

//let datos = 'departure'
let datos = 'arrival'

// Notacion por puntos
//console.log(vuelo.number)
//console.log(vuelo.datos)

// Notacion por corchetes -> permite usar variables para los nombres de propiedades
console.log(vuelo['number'])
console.log(vuelo[datos])


let users = ['Pepe', 'Rosa', 'Juan', 'María']
console.log(users)


for (let i = 0; i < users.length; i++) {
    const user = users[i];
    console.log(`Hola ${user}`)
}

/* for (const key in vuelo) {
        const element = vuelo[key];
         if (typeof element != 'object') {
             console.log( `La propiedad ${key} vale ${element}`)
         } else {
             for (const key in element) {
                     const item = element[key];
                     console.log( `La propiedad ${key} vale ${item}`)
             }
         }
} */

vuelo = {
    airline: 'Oceanic',
    number: '815',
    departure: {
        claveIATA: 'SYD',
        time:  '2004-09-22 14:55',
        ciudad: 'Sydney'
    },
    arrival: {
        claveIATA: 'LAX',
        time:  '2004-09-23 10:42',
        ciudad: 'Los Angeles'
    }
}

function mostrarObjeto(obj) {
    for (const key in obj) {
        const element = obj[key]
        if (typeof element != 'object') {
            console.log( `La propiedad ${key} vale ${element}`)
        }
        else {
            console.log( `La propiedad ${key} vale ...`)
            mostrarObjeto(element) 
        }
    }
}

mostrarObjeto(vuelo)