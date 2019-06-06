export class Controller {

    constructor() {
        console.log('Instanciado el controller')

        // 1. Nodos del DOM
        this.nodosDOM()

        // 2.Manejadores de eventos
        this.eventListeners ()

        // variables de stado
        this.animalSeleccionado
        this.aAnimales =  this.readStorageAnimales()

        // presentar datos inicialmente
        this.actualizarView()
    }

    nodosDOM() {
        this.inAnimal = document.querySelector('#inAnimal')
        this.btnAdd = document.querySelector('#btnAdd')
        this.btnClear = document.querySelector('#btnClear')
        this.lista = document.querySelector('.lista')
        this.tabla = document.querySelector('.tabla')
        this.dlgConfirmarBorrado = document.querySelector('#dlgConfirmarBorrado')
        this.btnBorrarSi = document.querySelector('#btnBorrarSi')
        this.btnBorrarNo = document.querySelector('#btnBorrarNo')
        this.dlgConfirmarBorradoTodos = document.querySelector('#dlgConfirmarBorradoTodos')
        this.btnBorrarSiTodos = document.querySelector('#btnBorrarSiTodos')
        this.btnBorrarNoTodos = document.querySelector('#btnBorrarNoTodos')
    }

    eventListeners () {
        this.inAnimal.addEventListener('change', this.addAnimal.bind(this))
        this.btnAdd.addEventListener('click', this.addAnimal.bind(this))
        this.btnClear.addEventListener('click', this.avisarBorradoTodos.bind(this))
        /* btnBorrarSi = addEventListener('click', this.borrarAnimal.bind(this))
        btnBorrarNo = addEventListener('click', this.borrarAnimal.bind(this)) */

        this.btnBorrarSi.addEventListener('click', this.borrarAnimal.bind(this))
        this.btnBorrarNo.addEventListener('click', this.borrarAnimal.bind(this))
        this.btnBorrarSiTodos.addEventListener('click', this.clearAnimales.bind(this))
        this.btnBorrarNoTodos.addEventListener('click', this.clearAnimales.bind(this))
    }

    // Manejadores de eventos

    addAnimal() {
        if (this.inAnimal.value) {
            this.aAnimales.push(this.inAnimal.value.toLowerCase())
            this.inAnimal.value = ''
        }
        this.saveStorageAnimales()
        this.actualizarView()
    }

    avisarBorradoTodos(ev) {
        this.dlgConfirmarBorradoTodos.open = true;
        //this.dlgConfirmarBorradoTodos.showModal();
    }

    clearAnimales(ev) {
        if (ev.target.id == 'btnBorrarSiTodos') {   
            this.aAnimales = []
            this.removeStorageAnimales() 
            this.actualizarView()
        }
        this.dlgConfirmarBorradoTodos.open = false;
        //this.dlgConfirmarBorradoTodos.close()
    }

    avisarBorrado(ev) {
        this.animalSeleccionado = ev.target.dataset.index
        this.dlgConfirmarBorrado.open = true;
        //this.dlgConfirmarBorrado.showModal();
    }

    borrarAnimal(ev) { 
      if (ev.target.id == 'btnBorrarSi') {    
            this.aAnimales.splice(this.animalSeleccionado,1)
            this.saveStorageAnimales()
            this.actualizarView()
        }
        this.dlgConfirmarBorrado.open = false;
        //this.dlgConfirmarBorrado.close()
    }

    // Métodos que completan el UI

    actualizarView() {
        this.crearLista()
        this.crearTabla()
        this.ajustarBorradores()
    }

    crearLista() {
        let lista = '<ul>'
        this.aAnimales.forEach( (item,i) => lista += `<li>${item} <i data-index="${i}" class="borrar far fa-trash-alt"></i></li>`)
        lista += '</ul>'
        this.lista.innerHTML = lista
    }

    crearTabla() {
        let tabla = '<table>'
        this.aAnimales.forEach( (item, i) => tabla += `<tr><td>${item} <i data-index=${i} class="borrar far fa-trash-alt"></i></td></tr>`)
        tabla += '</table>'
        this.tabla.innerHTML = tabla
    }

    ajustarBorradores() {
        this.aEraser = document.querySelectorAll('.borrar')
        this.aEraser.forEach( 
            item => item.addEventListener(
                'click', this.avisarBorrado.bind(this),
            )
        )
    }


    // Persistencia en localStorage

    saveStorageAnimales() {
        window.localStorage.setItem('animales', JSON.stringify(this.aAnimales))
    }

    readStorageAnimales() {
        let read = []
        let cadena = window.localStorage.getItem('animales')
        if (cadena) {
            read = JSON.parse(cadena)
        }
        return read
    }

    removeStorageAnimales() {
        window.localStorage.removeItem('animales')
    }
}