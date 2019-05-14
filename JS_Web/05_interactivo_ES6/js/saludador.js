export class Saludador {
    constructor() {
        this.aQuien = ''
        this.msg = [`Hola `, `Adios `]

        /** Seleccionar nodos del DOM */
        this.inNombre = document.querySelector('#in-nombre')
        this.btnSaludar = document.querySelector('#btn-saludar')
        this.btnDespedirse = document.querySelector('#btn-despedirse')
        
        /**Asignar manejadores a los nodos */
        this.btnSaludar.addEventListener('click', this.saludar.bind(this))
        this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
    }

    saludar() {
        this.aQuien = this.inNombre.value
        console.log(this.msg[0] + this.aQuien)
    }

    despedirse() {
        this.aQuien = this.inNombre.value
        console.log(this.msg[1] + this.aQuien)
    }
}