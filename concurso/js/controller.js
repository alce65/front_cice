import { render } from './render.js'
    
export class Controller {
    
    constructor () {
        console.log('cargado el controller')

            /** Nodos del DOM */
        this.oNodos = {
            inNombre : document.querySelector('#in-nombre'),
            btnProbar: document.querySelector('#btn-probar'),
            output : document.querySelector('#output')
        }

        /** Manejadores de eventos */

        this.oNodos.inNombre.addEventListener('change', this.onProbar.bind(this))
        this.oNodos.btnProbar.addEventListener('click', this.onProbar.bind(this))
    }

    /** Métodos */

    /** Método onProbar
     * @param {Event} ev 
     * @returns: void
     */
    onProbar (ev) {
        console.log(ev)
        if (ev.type == 'change') {
            console.log('change')
            ev.preventDefault()
        }
        if (this.oNodos.inNombre.value) {
            render(this.oNodos.inNombre.value, this.oNodos.output)
        }
    }
}
