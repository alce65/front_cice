export class Controller {

    constructor() {
        console.log('Instanciado el controller')

        // 1. Nodos del DOM

        this.inAnimal = document.querySelector('#inAnimal')
        this.btnAdd = document.querySelector('#btnAdd')
        this.btnClear = document.querySelector('#btnClear')
        this.lista = document.querySelector('.lista')
        this.tabla = document.querySelector('.tabla')
        this.dlgConfirmarBorrado = document.querySelector('#dlgConfirmarBorrado')

        // 2.Manejadores de eventos
        this.inAnimal.addEventListener('change', this.addAnimal.bind(this))
        this.btnAdd.addEventListener('click', this.addAnimal.bind(this))
        this.btnClear.addEventListener('click', this.clearAnimales.bind(this))
        
        // presentar datos inicialmente
        this.aAnimales =  this.readStorageAnimales()
        this.crearLista()
        this.crearTabla()
        
        this.aEraser = document.querySelectorAll('.borrar')
        this.aEraser.forEach( 
            item => item.addEventListener(
                'click', this.avisarBorrado.bind(this),
                )
            )
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

    avisarBorrado(ev) {

        let btnBorrarSi = document.querySelector('#btnBorrarSi')
        let btnBorrarNo = document.querySelector('#btnBorrarNo')

        btnBorrarSi = addEventListener('click', this.borrarAnimal.bind(this))
        btnBorrarNo = addEventListener('click', this.borrarAnimal.bind(this))

        console.log('Abrir modal')
        console.dir(ev.target)
        this.dlgConfirmarBorrado.open = true;
        //this.dlgConfirmarBorrado.showModal();
    }

    borrarAnimal(ev) { 
       console.log('Borrar modal')  
       console.dir(ev.target)
      if (ev.target.id == 'btnBorrarSi') {
            this.aAnimales.splice(ev.target.dataset.index,1)
            this.saveStorageAnimales()
            this.crearLista()
            this.crearTabla()
        }
        this.dlgConfirmarBorrado.open = false;
        //this.dlgConfirmarBorrado.close()
    }

    crearLista() {
        let lista = '<ul>'
        this.aAnimales.forEach( (item,i) => lista += `<li>${item} <i data-index="${i}" class="borrar far fa-trash-alt"></i></li>`)
        lista += '</ul>'
        this.lista.innerHTML = lista
        //this.lista = document.querySelector('.lista')
        //this.aEraser = document.querySelectorAll('.borrar')
        //this.aEraser.forEach( item => item.addEventListener('click', this.avisarBorrado.bind(this)))
    }

    crearTabla() {
        let tabla = '<table>'
        this.aAnimales.forEach( (item, i) => tabla += `<tr><td>${item} <i data-index=${i} class="borrar far fa-trash-alt"></i></td></tr>`)
        tabla += '</table>'
        this.tabla.innerHTML = tabla
        //this.tabla = document.querySelector('.tabla') 
        //this.aEraser = document.querySelectorAll('.borrar')
        //this.aEraser.forEach( item => item.addEventListener('click', this.avisarBorrado.bind(this)))
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