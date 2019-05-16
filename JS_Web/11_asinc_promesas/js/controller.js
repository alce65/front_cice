export function controller() {

    console.log('Cargado el controller')

    /** Nodos del DOM */
    const btnPedir = document.querySelector('#btn-pedir') 
    const btnSaludar = document.querySelector('#btn-saludar')
    const btnSaludar17 = document.querySelector('#btn-saludar-17')
    const btnUsers = document.querySelector('#btn-users')
    const output = document.querySelector('#output')
    
    /** Manejadores de eventos */
    btnPedir.addEventListener('click', onPedir)
    btnSaludar.addEventListener('click', onSaludar)
    btnUsers.addEventListener('click', onUsers)
    btnSaludar17.addEventListener('click', onSaludarAwait)

    
    /**
     * Una "Promesa" es un objeto nativo desde ES6
     * que representa la terminación o el fracaso eventual 
     * de una operación asíncrona.
     * 
     * Una promesa es un objeto devuelto desde una función
     * al cual encadenas las funciones callback, 
     * en vez de pasar funciones callback a una función.
     * 
     */

    function completarPedido () {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (Math.random() > 0.3) { // 70% simulamos aciertos
                    resolve('Toma tu hamburgesa')
                } else { // el otro 30% simulamos errores
                    reject('Lo siento, no quedan hamburgesas')
                }
            }, 2000 )
        })
    } 
    

    function onPedir() {
        completarPedido()
        .then( (datos) => { 
            output.innerHTML += '<li>' + datos + '</li>' 
        })
        .catch( (error) => {
            output.innerHTML += '<li>' + error + '</li>'
        })
    }    
    

    /* 
    function msgAfterTimeout (msg, nombre, tiempo, cb) {
        setTimeout(function () {
            cb(msg, nombre);
        }, tiempo);
    }; 
    
    msgAfterTimeout( 'Juanito', 'Pepito', 3500, (msg, nombre) => {
        let saludo = (`Hola ${nombre}!`)
        let quienSoy = msg
        console.log(saludo)
        msgAfterTimeout(msg, saludo, 500, (quienSoy, saludo) => {
            console.log(`${saludo}, soy ${quienSoy}`)
        }) 
    })  
    */

    function msgAfterTimeout(msg, nombre, tiempo) {
        return new Promise( (resolve) => {
            setTimeout( ()=>{
                let datos = [msg, nombre]
                resolve(datos)
            }, tiempo)
        } )
    }

    function onSaludar() {
        msgAfterTimeout( 'Juanito', 'Pepito', 3500)
        .then( (datos = []) => {
            let saludo = (`Hola ${datos[1]}!`)
            let quienSoy = datos[0].toUpperCase()
            console.log(saludo)
            return msgAfterTimeout (quienSoy, saludo, 500)
        }).then( (datos = []) => {
            console.log(`${datos[1]}, soy ${datos[0]}`)
        }) 
    }

    /* Ejemplo de la misma función usando destructuring de los arrays de datos
    
    function onSaludar() {
        msgAfterTimeout( 'Juanito', 'Pepito', 3500)
        .then( ([msg, nombre]) => {
            let saludo = (`Hola ${nombre}!`)
            let quienSoy = msg
            console.log(saludo)
            return msgAfterTimeout (msg, saludo, 500)
        }).then( ([quienSoy, saludo]) => {
            console.log(`${saludo}, soy ${quienSoy}`)
        }) 
    } */


    /**
     * En ES 2017 apraece async / await
     */

    async function onSaludarAwait () {
        let datos = []
        datos = await msgAfterTimeout( 'Juanito', 'Pepito', 3500)
        let saludo = (`Hola ${datos[1]}!`)
        let quienSoy = datos[0].toUpperCase()
        console.log(saludo)
        datos = await msgAfterTimeout (quienSoy, saludo, 500)
        console.log(`${datos[1]}, soy ${datos[0]}`)
    }


    function onUsers() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
        .then( (response) => { return response.json()})
        .then( (data) => { console.dir(data) })
        
    }
}
