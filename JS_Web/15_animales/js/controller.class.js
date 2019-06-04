export class Controller {

    constructor() {
        console.log('Instanciado el controller')

        // 1. Nodos del DOM

        this.inAnimal = document.querySelector('#inAnimal')
        this.btnAdd = document.querySelector('#btnAdd')
        this.btnClear = document.querySelector('#btnClear')
        this.lista = document.querySelector('.lista')
        this.tabla = document.querySelector('.tabla')

        // 2.Manejadores de eventos
        this.inAnimal.addEventListener('change', this.addAnimal.bind(this))
        this.btnAdd.addEventListener('click', this.addAnimal.bind(this))
        this.btnClear.addEventListener('click', this.clearAnimales.bind(this))
        
        // presentar datos inicialmente
        this.aAnimales =  this.readStorageAnimales()
        this.crearLista()
        this.crearTabla()
        
        this.aEraser = document.querySelectorAll('.borrar')
        this.aEraser.forEach( item => item.addEventListener('click', this.borrarAnimal.bind(this)))
    }

    addAnimal() {
        if (this.inAnimal.value) {
            this.aAnimales.push(this.inAnimal.value.toLowerCase())
            this.inAnimal.value = ''
        }
        console.log(this.aAnimales)
        this.saveStorageAnimales()
        this.crearLista()
        this.crearTabla()
    }

    clearAnimales() {
        this.aAnimales = []
        this.crearTabla()
        this.crearLista()
        this.removeStorageAnimales() 
    }

    borrarAnimal(ev) {
        console.log(ev)
        console.log(ev.target.childElementCount)
    }

    crearLista() {
        let lista = '<ul>'
        this.aAnimales.forEach( item => lista += `<li>${item} <i class="borrar far fa-trash-alt"></i></li>`)
        lista += '</ul>'
        this.lista.innerHTML = lista
        this.aEraser = document.querySelectorAll('.borrar')
    }

    crearTabla() {
        let tabla = '<table>'
        this.aAnimales.forEach( item => tabla += `<tr><td>${item}</td></tr>`)
        tabla += '</table>'
        this.tabla.innerHTML = tabla
    }

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