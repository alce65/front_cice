/**
 * Dada una cadena de caracteres hay que indicar si está formado 
 * - solo por letras mayúsculas, 
 * - sólo por letras minúsculas
 * - por la combinación de ambas
 *  
 */

 /**
  * fuction probarCadena
  * @param cadena: string
  * @returns: number
  *  - 0 = solo por letras mayúsculas,
  *  - 1 = sólo por letras minúsculas
  *  - 2 = por la combinación de ambas
  */

  function probarCadena(cadena = '') {
      let r = 2
      if( cadena ===  cadena.toUpperCase() ) {
          r = 0
      } else if (cadena === cadena.toLowerCase() ) {
          r = 1
      } 
      return r
  }

  /**
   * function comoEsLaCadena
   * @param: cadena : string
   * @returns: void
   * 
   */

   function comoEsLaCadena(cadena = '') {
        let mensajes = [
            'La cadena esta formada solo por letras mayúsculas',
            'La cadena esta formada sólo por letras minúsculas',
            'La cadena esta formada por la combinación de ambas'
        ]
        // let i = probarCadena(cadena)
        // console.log(mensajes[i])
        console.log(mensajes[probarCadena(cadena)])
   }

   let texto
   texto = 'LO QUE OS DE LA GANA'
   comoEsLaCadena(texto)
   texto = 'otra cosa que se os ocurra'
   comoEsLaCadena(texto)
   texto = 'Una última prueba'
   comoEsLaCadena(texto)