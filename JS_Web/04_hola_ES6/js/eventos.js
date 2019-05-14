export class Eventos {
    constructor () {
        this.msg = [
            'Hola desde una clase en un fichero ES6',
            'Adios desde una clase en un fichero ES6',
            'El ratón entró',
            'El ratón salió'
        ]
        this.manejarDOM()
        this.asignarListener()
    }
    manejarDOM() {
        /* this.nodos = {
            btnSaludar: document.querySelector('#btn-saludar'),
            btnDespedirse :document.querySelector('#btn-despedirse'),
            divRaton: document.querySelector('#div-raton')
        } */
        this.btnSaludar =  document.querySelector('#btn-saludar')
        this.btnDespedirse =  document.querySelector('#btn-despedirse')
        this.divRaton = document.querySelector('#div-raton')
    }
    asignarListener() {
        /* this.nodos.btnSaludar.addEventListener('click', this.saludar.bind(this))   
        this.nodos.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
        this.nodos.divRaton.addEventListener('mouseover', this.onMouseOver.bind(this))
        this.nodos.divRaton.addEventListener('mouseout', this.onMouseOut.bind(this)) */
        this.btnSaludar.addEventListener('click', this.saludar.bind(this))   
        this.btnDespedirse.addEventListener('click', this.despedirse.bind(this))
        this.divRaton.addEventListener('mouseover', this.onMouseOver.bind(this))
        this.divRaton.addEventListener('mouseout', this.onMouseOut.bind(this))
    }
    /**
     *  Métodos manejadores de eventos (Event Handler)  
     * */
    saludar () {
        console.log(this.msg[0])
    }
    despedirse () {
        console.log(this.msg[1])
    }
    onMouseOver() {
        console.log(this.msg[2])
    }
    onMouseOut() {
        console.log(this.msg[3])
    }

}