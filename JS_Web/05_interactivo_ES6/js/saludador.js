export class Saludador {
    constructor() {
        this.aQuien = ''
        this.msg = [`Hola `, `Adios `]

        /** Seleccionar nodos del DOM */
        this.inNombre = document.querySelector('#in-nombre')
        this.btnSaludar = document.querySelector('#btn-saludar')
        this.btnDespedirse = document.querySelector('#btn-despedirse')
        this.output = document.querySelector('#output')
        
        /**Asignar manejadores a los nodos */
        this.btnSaludar.addEventListener('click', this.saludar.bind(this))
        this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
    }

    saludar() {
        this.aQuien = '<b>' + this.inNombre.value + '</b>'
        // console.log(this.msg[0] + this.aQuien)
        this.output.innerHTML = this.msg[0] + this.aQuien
    }

    despedirse() {
        this.aQuien = '<b>' + this.inNombre.value + '</b>'
        // console.log(this.msg[1] + this.aQuien)
        this.output.innerHTML = this.msg[1] + this.aQuien
    }
}