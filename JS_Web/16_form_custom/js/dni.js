/**
 * Programa que comprueba la letra de un DNI
 * La letra se asigna a partir de un array preestablecido, 
 * seleccionando la posicion correspondiente al desto del numero entre 23
 * 
 */

 /**
  * function calcularLetraDNI
  * @param dni: string
  * @returns : string
  * 
  */

  function calcularLetraDNI(dni = '') {
      const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
      'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
      // let num = dni % 23
      // return letrasDNI[num]
      return letrasDNI[dni % 23]
  }

  /**
   * function isLetraDNIValida
   * @param dni: string (formato nnnnnnnnL)
   * @returns : boolean
   * 
   */

   //    1R - length = 2
   //   99999999R - length = 9

  export function isLetraDNIValida(dni = '') {
      let r = false
      let letra = dni[dni.length-1]
      let numero = dni.slice(0, dni.length-1)
      numero = formateaNumero(numero)
      if (letra === calcularLetraDNI(numero)) { r = true}
      return r
  }

  /**
   * function formateaNumero
   * @param cadena: string
   * @returns : string
   *  
   */
    function formateaNumero(cadena = '') {
        let aCadena = cadena.split('')
        for (let i = 0; i < aCadena.length; i++) {
            const item = aCadena[i];
            if (isNaN(item)) {
                aCadena.splice(i,1)
            }
        }
        return aCadena.join('')
    }
