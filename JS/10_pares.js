/* // Tipos de Strings

let cadena = 'Hola Mundo'
cadena = "Hola Mundo"
// ES6 aparecen los template string
cadena = `
Hola 
Mundo
`
let user = 'Pepe'
cadena = 'Hola ' + user + ', que tal estas'
cadena = `Hola ${user}, que tal estas`

console.log(cadena) */

/**
 * Programa que calcula si un número es par o impar
 * y muestra el resultado en consola
 * 
 */

 /**
  * Function calculaQueEs
  * @param num: number
  * @returns: number
  * Posibles valores
  *     0 pares
  *     1 impares
  *     2 numeros decimales
  *     3 no numeros (NaN)
  * */
 
  function  calculaQueEs(num) {
      let r
      if ( isNaN(num) || Array.isArray(num) || typeof num === 'boolean' ) {
        // num === true || num === false  
        // no es un número
        r = 3
      } else if (parseInt(num) != num) {
          // es un numero decimal
        r = 2
      } else {
        r =   num % 2
      }
     return r
  }

 
 /**
  * Function isPar
  * @param num: number
  * @returns: boolean
  * Posibles valores
  *    true pares
  *    false impar
  * Genera excepciones si el parámetro no es numerico
  *  2 si el valor es un numero decimal
  *  3 si el valor no es un número
  */

  function isPar(num) {
        if ( isNaN(num) || Array.isArray(num) || typeof num === 'boolean' ) {
            throw 3 // 'El valor no es un número'
        }  else if (parseInt(num) != num) {
            throw 2 //'El valor es un numero decimal'
        }
      return !(num % 2)
  }

  function isImpar(num) {
      return !!(num % 2)
  }

  /**
   * Function mostrar
   * @param num: number
   * @returns: void
   * 
   */

/*   function mostrar(isPar, num) {
      let mensajes = [
          `El número ${num} es par`,
          `El número ${num} es impar`
      ] 
      if (isPar) {
        console.log(mensajes[0])
      } else {
        console.log(mensajes[1])
      }
  } */

  function mostrar(num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`,
        `El número ${num} es decimal, que no es ni par ni impar`,
        `El valor ${num} no es un número`,
    ] 
    /* let i = 1
    if (isPar) {
      i = 0
    }  */
    let i
    try {
        i = (isPar(num)) ? 0 : 1
    } catch (error) {
        i = error
    }
    console.log(mensajes[i])
  }

  /**
   * Function mostrar2
   * @param code: mumber // sera 0 sies par y 1 si es impar
   * @param num: number
   * @returns: void
  */

  let number = 0
  number = 23
  number = 28
  number = 3.5
  number = 'Pepe'
  number = {}
  number = []
  number = true
  number = false
  
  mostrar(number)

  ////////////////////////////////////////////////////
  // Version final

  function mostrar2 (code, num) {
    let mensajes = [
        `El número ${num} es par`,
        `El número ${num} es impar`,
        `El número ${num} es decimal, que no es ni par ni impar`,
        `El valor ${num} no es un número`,
    ] 
    console.log(mensajes[code])
  }

  let numero = 0  
  numero = 25
  numero = 30
  numero = 3.3
  numero = 'Pepe'
  numero = {}
  numero = [] 
  numero = false
  numero = true
 
  // mostrar2(calculaQueEs(numero), numero)   
  // mostrar2(numero % 2, numero)   

  

 /*  try {
      // noExiste()
      let x = 3
      throw 'Probando un error'
  } catch (error) {
      console.log('Lo siento, ha habido un error:', error)
  } */
  


