
/**
 * Las funciones son objetos
 * Se pueden anidar
 * 
 */

function operaciones(x = 1, y = 1) {
    console.log(suma( x, y))
    function suma(x,y) { 
        return x + y
    }   
}

operaciones(10, 12)


/**
 * Las funciones son objetos
 * Se pueden pasar como parámetros = CALLBACK
 * 
 */

function mostrarResultado(x = 0, y = 0, nombre, operacion) {
    console.log(`El resultado de la ${nombre} con ${x} y ${y} es`)
    console.log(operacion(x,y))
}

// mostrarResultado(11, 12, function (x,y) {return x + y})
mostrarResultado(11, 12, 'suma', (x, y) =>  x + y)
mostrarResultado(11, 12, 'resta', (x, y) =>  x - y)
