/**
 * Programa para calcular los números de la serie de Fibonacci por debajo de un valor dado (incluido)
 * 
 * Partiendo de 0 y 1, cada elemento de la serie se calcula como la suma de los 2 anteriores
 * 
 */

 /**
  * Fuction fibonacci
  * @param limite: number
  * @returns : array[number]
  * 
  */

  function fibonacci (limite) {
    let i = 0    
    let j = 1
    let serie = [i]

    while (j <= limite)  {
        let next =  i + j 
        i = j
        j = next        
        serie.push(i)
    } 

    return serie
  }

  /**
  * Fuction fibonacciFor
  * @param limite: number
  * @returns : array[number]
  * 
  * 
  */

  function fibonacciFor(limite) {

    let serie = [0]

    /* for (let index = 0; index < Infinity; index++) {
        let next =  i + j 
        i = j
        j = next  
        serie.push(i)
        if (i > limite) {
            break
        }
    } */

    let next
    for (let i = 0, j = 1; i < limite; i = j, j = next) { 
        serie.push(j)
        next  =  i + j
    }
    return serie
  }


  let limite = 8
  // console.log(fibonacciFor(limite))
  console.log(fibonacci(0))