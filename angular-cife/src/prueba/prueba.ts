export function factorial(n: number) {
    if (n === 0 || n === 1 ) {
        return n;
    } else if ( n > 1) {
        return n * factorial(n - 1);
    } else {
        throw new Error('No existe el factorial de un número negativo');
    }
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

export function isPar(num: number) {
    if ( isNaN(num) || Array.isArray(num) || typeof num === 'boolean' ) {
        throw new Error('El valor no es un número');
    }  else if ( Math.floor(num) !== num) {
        throw new Error('El valor es un numero decimal');
    }
    return !(num % 2);
}
