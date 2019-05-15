export function controller() {

    console.log('Cargado el controller')

    /** Nodos del DOM */
    let btnMostrar = document.querySelector('#btn-mostrar')
    let btnSaludar = document.querySelector('#btn-saludar')     
    let btnLeer = document.querySelector('#btn-leer') 

    /** Manejadores de eventos */
    btnSaludar.addEventListener('click', saludar)
    btnMostrar.addEventListener('click', mostrar)
    btnLeer.addEventListener('click', leerDatos)
    

    function mostrar() {

        /* setTimeout(saludar,1000)
        
        function saludar() {
            console.log('hola amigo')
        } */

        setTimeout( ()=>console.log('Item 1'), 0 )

        console.log('Item 2')

        setTimeout( ()=>console.log('Item 3'), 2000 )
        
        console.log('Item 4')

        setTimeout( ()=>console.log('Item 5'), 1000 )        
        
    }

    function saludar() {
        console.log('Hola amigo')
    }

    function leerDatos() {

        let i
        // Lectura síncrona
        // i = 33
        // Lectura síncrona
        setTimeout(() => {
            i = 33
            mostrarDatos()
        }, 1000);

        // mostrarDatos() // el resultado sería undefined

        function mostrarDatos() {
            console.log(i)
        }
        
    }
}