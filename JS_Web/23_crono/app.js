import { Crono } from './crono.js'

// Función main del script
function main() {

    //**************************************************************
    
    // Se creean n objetos de la "clase" Crono,
    // correspondientes a los elementos definidos en HTML
    
    let n = 4
    const aCronos = []
    
    for (let i = 0; i < n; i++) {
        aCronos.push(new Crono(i+1))
    }
    
    // Se definen como manejadores de los eventos
    // los métodos de los correspondientes objetos 
    // en lugar de una única función creada al margen de los objetos
    
    aCronos.forEach( (crono) => {
        document.querySelector('#btn_cambiar_'+crono.posicion).addEventListener('click',() => crono.cambiarCrono() )
        document.querySelector('#btn_inicializar_'+crono.posicion).addEventListener('click', () => crono.limpiarCrono())
    })
    
    } //Fin de la función main()
    
document.addEventListener("DOMContentLoaded", main);