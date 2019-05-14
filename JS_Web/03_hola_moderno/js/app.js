/**
 *  Funciones manejadoras de eventos (Event Handler) 
 * 
 * */
        
function saludar () {
    console.log('Hola desde una funcion en un fichero JS')
}

function despedirse () {
    console.log('Adios desde una funcion en un fichero JS')
}

function onMouseOver() {
    console.log('El ratón entró')
}

function onMouseOut() {
    console.log('El ratón salió')
}

function cuadrados(item) { return item * item}

/**
 * 
 * Accesos al DOM (Document Object Model)
 */

// window.addEventListener('load') 

function main () {
    let datos = [1,2,3,4,5]
    console.log( datos.map(cuadrados) )

    document.querySelector('#btn-saludar').addEventListener('click', saludar)   
    document.querySelector('#btn-despedirse').addEventListener('click', despedirse)
    document.querySelector('#div-raton').addEventListener('mouseover', onMouseOver)
    document.querySelector('#div-raton').addEventListener('mouseout', onMouseOut)
}

(function () {
    document.addEventListener('DOMContentLoaded', main) 
})()



