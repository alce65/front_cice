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
    },

}

vuelo.mostrar = function (obj = this) {
    for (const key in obj) {
        const element = obj[key]
        if (typeof element === 'function') {
            continue
        }
        /* if (typeof element === 'object') {
            console.log( `La propiedad ${key} vale ...`)
            obj.mostrar(element) }
        else {
             console.log( `La propiedad ${key} vale ${element}`)
        } */

        if (typeof element !== 'object') {
            console.log( `La propiedad ${key} vale ${element}`)
        }
        else { // element === 'object'
            console.log( `La propiedad ${key} vale ...`)
            obj.mostrar(element) 
        }
    }
}

/**
 * @param : object
 * @returns: string
 */
vuelo.toString = function (obj = this) {
    let output = ''
    for (const key in obj) {
        const element = obj[key]
        if (typeof element === 'function') {
            continue
        }
        if (typeof element === 'object') {
            output = output + `La propiedad ${key} vale ...` + '\n'
            // output += `La propiedad ${key} vale ...`
            output = output + obj.toString(element) }
        else {
             output = output + `La propiedad ${key} vale ${element}` + '\n'
             //output += `La propiedad ${key} vale ${element}`
        }
    }
    return output
}

vuelo.mostrarFinal = function () {
    console.log(this.toString())
}

// vuelo.mostrar()

vuelo.mostrarFinal()






