/**
 * Programa que calcula si un número es par o impar
 * y muestra el resultado en consola
 * 
 */

 /**
  * Function isPar
  * @param num: number
  * @returns: boolean
  * Posibles valores
  *    true pares
  *    false impar
  * Genera excepciones si el parámetro no es numerico
  *  -1 si el valor es un numero decimal
  *  -2 si el valor no es un número
  */

  function isPar(num) {
        if ( isNaN(num) || Array.isArray(num) || typeof num === 'boolean' ) {
            let error = new Error(-1)
            error.description = 'El valor no es un número'
            throw error
        }  else if (parseInt(num) != num) {
            let error = new Error(-2)
            error.description = 'El valor es un numero decimal'
            throw error
        }
      return !(num % 2)
  }

   /**
   * Function mostrar
   * @param num: number
   * @returns: void
   * 
   */

  function mostrar(num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`
    ]
    let i
    try {
        i = (isPar(num)) ? 0 : 1
    } catch (error) {
        i = error.number
        console.log(error.description)
    }
    if (i >= 0) {
      console.log(mensajes[i])
    } 
  }

(function () {
  let pruebas = [0, 23, 28, 3.5, 'Pepe', {}, [], true, false]
  pruebas.forEach(item => mostrar(item))
})()