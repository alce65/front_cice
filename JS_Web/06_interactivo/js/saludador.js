
export function main () {

    let aQuien = ''
    let msg = [`Hola `, `Adios `]

    /** Seleccionar nodos del DOM */
    let inNombre = document.querySelector('#in-nombre')
    let btnSaludar = document.querySelector('#btn-saludar')
    let btnDespedirse = document.querySelector('#btn-despedirse')
    
    
    /**Asignar manejadores a los nodos */
    btnSaludar.addEventListener('click', saludar)
    /* btnSaludar.addEventListener('click', () => {
            aQuien = inNombre.value
            console.log(msg[0] + aQuien)
    }) */
    btnDespedirse.addEventListener('click', despedirse)

    function saludar () {
        aQuien = inNombre.value
        console.log(msg[0] + aQuien)
    }

    function despedirse() {
        aQuien = inNombre.value
        console.log(msg[1] + aQuien)
    }

}