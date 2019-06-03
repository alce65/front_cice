export function controller() {

    // Experimentos 

    console.log('Cargado el controller')

    const oPerson = {nombre: 'Pepe', edad: 22}
    oPerson.edad = 23
    console.dir(oPerson)

    const nodoDocument = document
    console.dir(nodoDocument)

    //html>body>section:nth-child(2)>div:nth-child(2)>input

    nodoDocument.children[0].children[1].children[1].children[1].children[1].value = 'Elena'

    document.querySelector('#inNombre').value = 'Juana'

    document.querySelector('#divNombre').children[1].value = 'Ernesto'

    document.querySelector('#inNombre').value = ''

    // Procedimiento habitual

    // 1. Referencia a los Nodos del DOM que me interesan

    const inNombre =  document.querySelector('#inNombre')
    const outSaludo =  document.querySelector('#outSaludo')

    console.dir(inNombre)
    console.dir(outSaludo)

    // 2. Definir los manejadores de eventos

    inNombre.addEventListener('input', onInputSaludar)

    // 3. Implemantar los manejadores de eventos

    function onInputSaludar() {
        if (inNombre.value) {
            outSaludo.innerHTML = ` Hola ${inNombre.value}`
        } else {
            outSaludo.innerHTML = ``
        }
    }   
}

