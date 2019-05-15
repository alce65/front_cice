
export function main () {

    let aQuien = ''
    let msg = [`Hola `, `Adios `]

    /** Seleccionar nodos del DOM */
    let inNombre = document.querySelector('#in-nombre')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnDespedirse = document.querySelector('#btn-despedirse')
    let btnBorrar = document.querySelector('#btn-borrar')
    let output = document.querySelector('#output')
    
    /**Asignar manejadores a los nodos */
    btnSaludar.addEventListener('click', saludar)
    /* btnSaludar.addEventListener('click', () => {
            aQuien = inNombre.value
            console.log(msg[0] + aQuien)
    }) */
    btnDespedirse.addEventListener('click', despedirse)
    btnBorrar.addEventListener('click', borrar)

    function saludar () {
        if (inNombre.value) {
            aQuien = '<b>' + inNombre.value + '</b>'
            // console.log(msg[0] + aQuien)
            output.innerHTML = msg[0] + aQuien
        }
    }

    function despedirse() {
        if (inNombre.value) {
            aQuien = '<b>' + inNombre.value + '</b>'
            // console.log(msg[1] + aQuien)
            output.innerHTML = msg[1] + aQuien 
        }
    }

    function borrar() {
        output.innerHTML = ''
        inNombre.value = ''
    }
}