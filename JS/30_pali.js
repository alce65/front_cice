/**
 * Comprobar si una frase SIN ACENTOS es un palíndromo
 * Se lee igual en ambos setidos, sin contar los espacios
 * por ejemplo
 * La ruta nos aportó otro paso natural
 * Atar a la rata...
 */

 /**
  * function isPali
  * @param cadena: string
  * @return: boolean
  */

  function isPali(cadena = '') {
        let r = true
        let cadenaSinEspacios = cadena.split(' ').join('').toLowerCase()
        // console.log(cadenaSinEspacios)
        let cadenaInversa = cadenaSinEspacios.split('').reverse().join('')
        // console.log(cadenaInversa)
        if (cadenaSinEspacios !== cadenaInversa ) {
            r = false
        }
        return r
  }

function isPaliShort(cadena = '') {
    return cadena.split(' ').join('').toLowerCase() === cadena.split(' ').join('').toLowerCase().split('').reverse().join('') ? true: false
}

(function () {
    let textos = [
        'Esto no es un palíndromo',
        'La ruta nos aporto otro paso natural',
        'Atar a la rata'
    ]
    for (let i = 0; i < textos.length; i++) {
        const texto = textos[i];
        console.log(texto)
        console.log(isPaliShort(texto))
    }
})()

